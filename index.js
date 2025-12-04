import express from 'express';

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

app.use(express.json()); // Middleware para parsear JSON (poder utilizar json para recibir información en el body)

// Metodo/Vervo GET para traer datos
app.get('/posts', (req, res) =>{ // /posts es el endpoint o ruta
    res.json(
        [
            {id: 1, title: 'Post 1', content: 'Contenido del post 1'},
            {id: 2, title: 'Post 2', content: 'Contenido del post 2'},
            {id: 3, title: 'Post 3', content: 'Contenido del post 3'},
        ]
    )
}); 

// Metodo/Vervo POST para enviar datos
app.post('/posts', (req, res) => {
    console.log('Datos recibidos:', req.body); // req.body contiene los datos enviados en el cuerpo de la solicitud
    res.json({message: 'Post guardado exitosamente', post: req.body});
});
