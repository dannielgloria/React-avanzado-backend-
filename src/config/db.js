const mongoose = require('mongoose');

const mongoURI = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {});
    console.log('🟢 Conectado a la base de datos MongoDB');
  } catch (error) {
    console.error('🔴 Error al conectar a la base de datos MongoDB:', error);
    process.exit(1); // Salir del proceso con un código de error
  }
};

module.exports = connectDB;