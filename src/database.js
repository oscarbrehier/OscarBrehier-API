import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export default function init() {

    const uri = process.env.URI;
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    };

    console.log(uri);

    mongoose.connect(`${uri}`, options);

    mongoose.connection.on('connected', () => {
        console.log('📦 Mongoose database connected');
    });

    mongoose.connection.on('disconnected', () => {
        console.log('⛑️ Mongoose database disconnected');
    });

    mongoose.connection.on('error', (error) => {
        console.error(`⏰ Mongoose database error \n${error.stack}`);
    });

}