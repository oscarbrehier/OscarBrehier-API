import express from 'express';
import bodyParser from "body-parser";
import cors from 'cors';
import routes from './routes/routes.js'
import init from "./utils/mongoose.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/', routes);

console.clear();

init();
app.listen(PORT, () => {
    console.log(`Server | Running on ${PORT}`);
}); dede