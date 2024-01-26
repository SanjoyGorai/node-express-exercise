import express from 'express';
const app = express();
const PORT = process.env.PORT || 4001;
import userRouter from './routers/user.js'
import cors from 'cors';
import mobiles from './ProductsApi/products.js'

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
  res.send(mobiles) ;
})

app.listen(PORT, () => {
  console.log(`Express Server listening on port http://localhost:${PORT}`);
});

console.log()