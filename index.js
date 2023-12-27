

const express = require('express');
const app = express();
const port = 1000;

app.get('/', (req, res) => {
    res.send("<h1>This is App/Folder Page dsd  </h1> <button>Button</button>");
});

app.get('/route', (req, res) => {
    res.send(" <h1>Toute Page </h1>");
});

app.get('/about/', (req, res) => {
    res.send("<button>Button This is about page</button>");
});

app.get('/products', (req, res) => {
    res.send('<img src="assets/images/oneplus.webp" alt="phone">');
});

app.listen(port, 'localhost', () => {
    console.log(`Server has been running at ${port} port`);
});