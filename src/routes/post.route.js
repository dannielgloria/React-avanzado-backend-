const express = require('express');
const router  = express.Router();
const postController = require('../controllers/post.controller');

// Ruta para crear un nuevo post ==> http://localhost:3000/post/
router.post('/', postController.createPost);

// Ruta para obtener todos los posts ==> http://localhost:3000/post/
router.get('/', postController.getPosts);

// Ruta para obtener un post por ID ==> http://localhost:3000/post/:id
router.get('/:id', postController.getPostById);

// Ruta para actualizar un post por ID ==> http://localhost:3000/post/:id
router.put('/:id', postController.updatePost);

// Ruta para eliminar un post por ID ==> http://localhost:3000/post/:id
router.delete('/:id', postController.deletePost);

module.exports = router;
