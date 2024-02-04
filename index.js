import express from 'express';
const app = express();
const PORT = process.env.PORT || 4001;
import userRouter from './routers/user.js'
import cors from 'cors';
import mobiles, { products } from './ProductsApi/products.js'
import mongoose from 'mongoose';
import Person from './PersonSchema/Person.js'
import pg from 'pg';
const { Pool, Client } = pg;

const client = new Client({
  host: 'localhost',
  port: 5432,
  database: 'postgres',
  user: 'postgres',
  password: 'sanjoypql',
});
await client.connect();

client.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Error connecting to PostgreSQL:'), err;
  } else {
    console.log('Connected to PostgreSQL:', res.rows[0].now);
  }
});

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello from Express Js')
});

app.use('/user', userRouter);

app.use(express.json());
app.use(express.text());
app.put('/api/post', (req, res) => {
  console.log(req.body);
  res.send("Success");
});

app.get('/mobiles', (req, res) => {
  res.send(mobiles);
});

app.get('/products/all', (req, res) => {
  res.send(products);
})

app.listen(PORT, () => {
  console.log(`Express Server listening on port http://localhost:${PORT}`);
});

console.log(process.env);