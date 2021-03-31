const { request, response } = require('express');
const express = require('express');

const app = express();

// console.log(app);

// app.get('/', (request, response) => {
//     response.send('Olá, Mundo!');
// })
// app.listen(3000, () => {
//     console.log('Servidor rodando!');
// })

app.get('/projects', (request, response) => {
    return response.json([
        'Projeto 1',
        'Projeto 2',
    ])
});

app.post('/projects', (request, response) => {
    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3', 
        'Projeto 4',
        'Projeto 5',
        
    ])
});

app.put('/projects/:id', (request, response) => {
    return response.json([
        'Projeto 50',
        'Projeto 2',
        'Projeto 3', 
        'Projeto 4',
        'Projeto 5',
    ]);
});

app.delete('/projects/:id', (request, response) => {
    return response.json([
        'Projeto 50',
        'Projeto 2',
        'Projeto 3', 
    ]);
});

app.listen(3000);