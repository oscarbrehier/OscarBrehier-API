import mongoose from 'mongoose';

export default function init() {

    const uri = `mongodb+srv://${process.env.username}:${process.env.password}@cluster01.by2xl.mongodb.net/data`;
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    };

    mongoose.connect(uri, options);

    mongoose.connection.on('connected', () => {
        console.log('Mongoose | Connected');
    });

    mongoose.connection.on('disconnected', () => {
        console.log('Mongoose | Disconnected');
    });

    mongoose.connection.on('error', (error) => {
        console.error(`Mongoose | Error \n${error.stack}`);
    });

}