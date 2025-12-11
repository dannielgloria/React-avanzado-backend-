import express from 'express';

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

app.use(express.json()); // Middleware para parsear JSON (poder utilizar json para recibir información en el body)

var posts = [
    {id: 1, title: 'Post 1', content: 'Contenido del post 1'},
];

// Metodo/Vervo GET para traer datos
app.get('/posts', (req, res) =>{ // /posts es el endpoint o ruta
    res.json(posts)
}); 

// Metodo/Vervo POST para enviar datos (crear un nuevo recurso)
app.post('/posts', (req, res) => {
    console.log('Datos recibidos:', req.body); // req.body contiene los datos enviados en el cuerpo de la solicitud
    
    const newPost = req.body; // Obtener el nuevo post del cuerpo de la solicitud

    posts.push(newPost); // Agregar el nuevo post al array de posts

    res.json({message: 'Post guardado exitosamente', post: req.body}); // Respuesta al cliente
});

// Metodo/Vervo UPDATE para actualizar datos
app.put('/posts/:id', (req, res) => {
    const post = findPostById(req.params.id); // Buscar el post por su ID utilizando la función auxiliar
    
    post.title = req.body.title; // Actualizar el título del post
    post.content = req.body.content; // Actualizar el contenido del post
    
    return res.json({message: `Post con id: ${post.id} actualizado exitosamente`, post}); // Respuesta al cliente
});

// Metodo/Vervo DELETE para eliminar datos
app.delete('/posts/:id', (req, res) => {
    const post = findPostById(req.params.id); // Buscar el post por su ID utilizando la función auxiliar
    
    posts = posts.filter(p => p.id !== post.id); // Eliminar el post del array de posts
    
    return res.json({message: `Post con id: ${post.id} eliminado exitosamente`}); // Respuesta al cliente
});

// Metodo/Vervo GET para traer un solo dato por su id
app.get('/posts/:id', (req, res) => {
    const post = findPostById(req.params.id); // Buscar el post por su ID utilizando la función auxiliar
    
    return res.json(post); // Respuesta al cliente con el post encontrado
});

// Funcion para manejar busqueda por id (comprobamos si existe el id en el array y un error 404)
function findPostById(id) {
    const postId = parseInt(id);
    const post = posts.find(post => post.id === postId);
    if (!post) {
        throw new Error('Post no encontrado');
    }
    return post;
}