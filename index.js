
// const express = require('express')
import express from 'express'
const app = express()
const PORT = process.env.PORT || 3000;

const data_product = [
    {
        id: 1,
        name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
        new_price: 50.00,
        old_price: 80.50,
    },
    {
        id: 2,
        name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
        new_price: 85.00,
        old_price: 120.50,
    },
    {
        id: 3,
        name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
        new_price: 60.00,
        old_price: 100.50,
    },
    {
        id: 4,
        name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
        new_price: 100.00,
        old_price: 150.00,
    },
];


const person = {
    name: 'Sanjoy Gorai',
    age: 22,
    mobile: 9064,
    country: 'India'
}

app.get('/', (req, res) => {
    console.log(req.url);
    res.send("Hello from Express JS.");
})

app.get('/person', (req, res) => {
    res.send(person)
    console.log(req.url);
});

app.get('/products', (req, res) => {
    res.send(data_product);
    console.log(data_product);
});


app.listen(PORT, () => {
    console.log("Server is running on: " + PORT);
})


