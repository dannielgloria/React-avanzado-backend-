const Post = require('../models/post.model');

// Controlador para crear un nuevo post
exports.createPost = async (req, res) => {
  try {
    const { title, content, user_id } = req.body;

    // Crear un nuevo post
    const newPost = new Post({ title, content, user_id });
    await newPost.save();
    
    res.status(201).json({ message: 'Post creado exitosamente' });
  } catch (error) {
    console.error('Error al crear post:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

// Controlador para obtener todos los posts
exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('user_id', 'username email');
    res.status(200).json(posts);
  } catch (error) {
    console.error('Error al obtener posts:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

// Controlador para obtener un post por ID
exports.getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id).populate('user_id', 'username email');
    if (!post) {
      return res.status(404).json({ message: 'Post no encontrado' });
    }
    res.status(200).json(post);
  } catch (error) {
    console.error('Error al obtener post:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

// Controlador para actualizar un post por ID
exports.updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    
    const updatedPost = await Post.findByIdAndUpdate(id, { title, content }, { new: true });
    if (!updatedPost) {
      return res.status(404).json({ message: 'Post no encontrado' });
    }
    res.status(200).json(updatedPost);
  } catch (error) {
    console.error('Error al actualizar post:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};  

// Controlador para eliminar un post por ID
exports.deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    
    const deletedPost = await Post.findByIdAndDelete(id);
    if (!deletedPost) {
      return res.status(404).json({ message: 'Post no encontrado' });
    }
    res.status(200).json({ message: 'Post eliminado exitosamente' });
  } catch (error) {
    console.error('Error al eliminar post:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};