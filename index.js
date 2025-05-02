const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => {
    res.send('Bienvenue sur mon app Node.js déployée via Jenkins & Kubernetes !');
});

app.get('/sante', (req, res) => {
    res.send({ status: 'ok' });
});

app.get('/info', (req, res) => {
    res.json({ version: '1.0.0', auteur: 'VotreNom' });
});

app.listen(port, () => {
    console.log(`Mon app écoute sur le port ${port}`);
});
