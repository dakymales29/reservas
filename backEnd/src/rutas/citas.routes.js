import { Router } from "express";
import pool from '../db/db.js';
import calendar from '../config/google.js';

const router = Router();

// =======================
// GET - OBTENER EVENTOS
// =======================
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
      start: event.start.dateTime || event.start.date
    }));

    res.json(eventos);

  } catch (error) {
    console.error(error);
    res.status(500).json({ 
      mensaje: 'Error al obtener eventos',
      error: error.message
    });
  }
});


// =======================
// POST - CREAR CITA
// =======================
router.post('/crearCitas', async (req, res) => {
  try {
    console.log("BODY 🔥:", req.body);

    const { nombre, apellido, celular, correo, fecha, hora } = req.body;

    // validar datos
    if (!fecha || !hora) {
      return res.status(400).json({
        mensaje: "Fecha y hora son obligatorios"
      });
    }

    // 🔴 verificar duplicados en BD
    const existeCita = await pool.query(
      `SELECT * FROM citas WHERE "Fecha"=$1 AND "Hora"=$2`,
      [fecha, hora]
    );

    if (existeCita.rows.length > 0) {
      return res.status(400).json({
        mensaje: "Esta hora ya está reservada"
      });
    }

    // 🔥 FORMATO CORRECTO (SIN toISOString)
    const startDateTime = `${fecha}T${hora}:00`;

    const [h, m] = hora.split(':');
    const endHour = String(parseInt(h) + 1).padStart(2, '0');
    const endDateTime = `${fecha}T${endHour}:${m}:00`;

    console.log("START:", startDateTime);
    console.log("END:", endDateTime);

    const event = {
      summary: `Cita - ${nombre} ${apellido}`,
      description: `Celular: ${celular} - Correo: ${correo}`,
      start: {
        dateTime: startDateTime,
        timeZone: 'America/Guayaquil'
      },
      end: {
        dateTime: endDateTime,
        timeZone: 'America/Guayaquil'
      },
      reminders: {
        useDefault: false,
        overrides: [{ method: 'email', minutes: 0 }]
      }
    };

    const response = await calendar.events.insert({
      calendarId: 'dakmagamer543@gmail.com',
      requestBody: event
    });

    const eventoId = response.data.id;

    // guardar en BD
    await pool.query(
      `INSERT INTO citas ("Nombre", "Apellido", "Celular", "Correo", "Fecha", "Hora", "Calendario_id")
       VALUES ($1,$2,$3,$4,$5,$6,$7)`,
      [nombre, apellido, celular, correo, fecha, hora, eventoId]
    );

    res.status(201).json({
      mensaje: 'Cita creada correctamente ✅',
      eventoId
    });

  } catch (error) {
    console.error("ERROR REAL 🔥:", error);

    res.status(500).json({ 
      mensaje: 'Error al crear cita',
      error: error.message
    });
  }
});


// =======================
// DELETE - ELIMINAR
// =======================
router.delete('/eliminarCitas/:id', async (req, res) => {
  try {
    const { id } = req.params;

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

    try {
      await calendar.events.delete({
        calendarId: 'dakmagamer543@gmail.com',
        eventId: eventoId
      });
    } catch (error) {
      if (error.code !== 410) throw error;
      console.log("Evento ya eliminado en Google");
    }

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