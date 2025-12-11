const User = require('../models/user.model');

// Controlador para registrar un nuevo usuario
exports.register = async (req, res) => {
  try {
    const { username, password, email } = req.body;

    // Crear un nuevo usuario
    const newUser = new User({ username, password, email });
    await newUser.save();
    
    res.status(201).json({ message: 'Usuario registrado exitosamente' });
  } catch (error) {
    console.error('Error al registrar usuario:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

// Controlador para autenticar un usuario
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Buscar el usuario en la base de datos
    const user = await User.findOne({ email , password });
    if (!user) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    res.status(200).json({ message: 'Login exitoso' });
  } catch (error) {
    console.error('Error al autenticar usuario:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};