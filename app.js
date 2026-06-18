const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Aplicação DevOps funcionando!');
});

app.get('/sobre', (req, res) => {
    res.send('Página Sobre');
});

app.get('/contato', (req, res) => {
    res.send('Página Contato');
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log("Servidor rodando na porta " + PORT);
    });
}

module.exports = app;
