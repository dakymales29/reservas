//importamos lo que instalamos
import express from 'express'
import cors from 'cors'
import pg from 'pg'
import dotenv from 'dotenv'
//rutas
import citasRuta from './rutas/citas.routes.js';

const app = express(); //usamos express en nuestro servidor

//middlewares
app.use(cors()); //le damos permiso a cualquier persona conectarse al backEnd
app.use(express.json()); //permite peticiones en formato json

//ruta citas
app.use('/api',citasRuta);


//RUTA DE prueba
app.get('/',(req,res)=>{
    res.json({mensaje:'BACK END FUNCIONANDO 🚀'})
})

export default app;
