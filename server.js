const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("Olá Mundo!");
});

var issoEUmTesteGay;

app.listen(3001);