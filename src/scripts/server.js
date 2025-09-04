const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', (req, res) => res.send('Servidor funcionando!'));
app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));

