//una ruta es “Cuando alguien visite ESTA URL, ejecuta ESTE código”
import { Router } from "express";
import pool from '../db/db.js';
import calendar from '../config/google.js';//google calendar

const router = Router();

//GET
router.get('/citas', async (req, res) => {
  try {
    const response = await calendar.events.list({
      calendarId: 'dakmagamer543@gmail.com',
      timeMin: '2000-01-01T00:00:00Z',
      maxResults: 50,
      singleEvents: true,
      orderBy: 'startTime'
    });

    const eventos = response.data.items.map(event => ({
      title: event.summary,
      start: new Date(event.start.dateTime || event.start.date)
    }));

    res.json(eventos);

  } catch (error) {
    console.error(error);
    res.status(500).json({ 
    mensaje: 'Error al obtener eventos',
    error: error.message,
    stack: error.stack
      });
  }
});
//POST - GOOGLE CALENDAR

router.post('/crearCitas', async (req, res) => {
  try {

    const { nombre, apellido, celular, correo, fecha, hora } = req.body;
    // 🔴 verificar duplicados
    const existeCita = await pool.query(
      `SELECT * FROM citas WHERE "Fecha"=$1 AND "Hora"=$2`,
      [fecha, hora]
    );

    if (existeCita.rows.length > 0) {
      return res.status(400).json({
        mensaje: "Esta hora ya está reservada"
      });
    }
    const startDateTime = `${fecha}T${hora}:00`;

    const endDate = new Date(startDateTime);
    endDate.setHours(endDate.getHours() + 1);

    const event = {
      summary: `Cita - ${nombre} ${apellido}`,
      description: `Celular: ${celular} - Correo: ${correo}`,
      start: {
        dateTime: startDateTime,
        timeZone: 'America/Guayaquil'
      },
      end: {
        dateTime: endDate.toISOString(),
        timeZone: 'America/Guayaquil'
      },
       reminders: {
    useDefault: false,
    overrides: [
      { method: 'email', minutes: 0 }
    ]}
    };

    const response = await calendar.events.insert({
      calendarId: 'dakmagamer543@gmail.com',
      requestBody: event
    });

    const eventoId = response.data.id;

    await pool.query(
      `INSERT INTO citas ("Nombre", "Apellido", "Celular", "Correo", "Fecha", "Hora", "Calendario_id")
       VALUES ($1,$2,$3,$4,$5,$6,$7)`,
      [nombre, apellido, celular, correo, fecha, hora, eventoId]
    );

    res.status(201).json({
      mensaje: 'Cita creada en Google Calendar y guardada en BD',
      eventoId
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al crear cita' });
  }
});

//DELETE - GOOGLE CALENDAR
router.delete('/eliminarCitas/:id', async (req, res) => {
  try {

    const { id } = req.params;

    // buscar la cita en la base de datos
    const result = await pool.query(
      `SELECT * FROM citas WHERE "id_cita" = $1`,
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        mensaje: "Cita no encontrada"
      });
    }

    const eventoId = result.rows[0].calendario_id;

    // intentar eliminar evento en Google Calendar
    try {
      await calendar.events.delete({
        calendarId: 'dakmagamer543@gmail.com',
        eventId: eventoId
      });
    } catch (error) {

      // si el evento ya fue eliminado
      if (error.code !== 410) {
        throw error;
      }

      console.log("El evento ya no existe en Google Calendar");
    }

    // eliminar cita de la base de datos
    await pool.query(
      `DELETE FROM citas WHERE "id_cita" = $1`,
      [id]
    );

    res.json({
      mensaje: "Cita eliminada correctamente"
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      mensaje: "Error al eliminar la cita"
    });
  }
});

export default router;