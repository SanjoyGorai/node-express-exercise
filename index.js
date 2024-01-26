import express from 'express';
const app = express();
const PORT = process.env.PORT || 4001;
import userRouter from './routers/user.js'
import cors from 'cors';
import mobiles from './ProductsApi/products.js'
import mongoose from 'mongoose';


mongoose.connect('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2');
const db = mongoose.connection;

db.on('error', (err) => {
  console.log('MongoDB connection error:', err);
});
db.once('open', () => {
  console.log('Connected to MongoDB');
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
})

app.listen(PORT, () => {
  console.log(`Express Server listening on port http://localhost:${PORT}`);
});

console.log(process.env);