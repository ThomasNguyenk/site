const express = require('express');
const app = express();
const port = 3000;

// Définition d'une route simple
app.get('/', (req, res) => {
    res.send('Bonjour! Bienvenue sur mon site de cours !');
});

// Lancement du serveur
app.listen(port, () => {
    console.log(`Le serveur écoute sur http://localhost:${port}`);
});