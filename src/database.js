import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export default function database() {

    const options = {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    };

    mongoose.connect(process.env.DATABASE_URI, options);

    console.log('database');

    mongoose.connection.on('connection', () => {
        console.log('📦 Mongoose database connected');
    });

};