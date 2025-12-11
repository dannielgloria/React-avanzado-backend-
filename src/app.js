const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth.route');

const app = express();

connectDB(); // Conectar a la base de datos

// Middlewares
app.use(cors()); //Permitir solicitudes desde otros dominios
app.use(express.json()); // Hago que mi app entienda JSON

// Registra rutas
//app.use('/post', );
app.use('/auth', authRoutes); // Rutas de autenticación http://localhost:3000/auth

module.exports = app;