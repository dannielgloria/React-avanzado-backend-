const express = require('express');
const cors = require('cors');

const app = express();

// Middlewares
app.use(cors()); //Permitir solicitudes desde otros dominios
app.use(express.json()); // Hago que mi app entienda JSON

// Registra rutas
app.use('/post', );
app.use('/auth', );

module.exports = app;