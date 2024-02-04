import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const personSchema = new Schema({
  name: String,
  age: Number,
});

const Person = mongoose.model('Person', personSchema);

export default Person

