import express from 'express';
import { serverPort } from '../config/config.json';
import bodyParser from 'body-parser';
import {db} from './db/db';
import {routes} from './routes/routes';
const PORT = 4000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
routes(app);
const begin = async () =>{
    console.log('Try to connect to DB...');
    await db();

    app.listen(serverPort||PORT, () =>
        console.log(`Your server is running on port ${serverPort||PORT}`)
    );
}
begin();
