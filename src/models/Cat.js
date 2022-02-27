import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    name: String
});

export default mongoose.model('Cat', schema); // meow 🐈