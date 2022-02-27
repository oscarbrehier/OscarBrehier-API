import mongoose from 'mongoose';

export default function init() {

    const uri = `mongodb+srv://Oscar:husky2005@cluster01.by2xl.mongodb.net/data`;
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    };

    mongoose.connect(uri, options);

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