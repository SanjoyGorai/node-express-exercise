import express from 'express';
const app = express();
const PORT = process.env.PORT || 4001;
import userRouter from './routers/user.js'
import cors from 'cors';
import mobiles, { products } from './ProductsApi/products.js'
import mongoose from 'mongoose';
import Person from './PersonSchema/Person.js'


mongoose.connect('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=SanjoyDB');
const db = mongoose.connection;




db.on('error', (err) => {
  console.log('MongoDB connection error:', err);
});
db.once('open', () => {
  console.log('Connected to MongoDB');
});


app.get('/create-person', async (req, res) => {
  try {
    const newPerson = new Person({
      name: 'John Doe',
      age: 30,
    });

    await newPerson.save();
    res.json({ message: 'Person created successfully!' });
  } catch (error) {
    console.error('Error creating person:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.use(cors())

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