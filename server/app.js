import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import { serverPort } from '../etc/config.json';
import *as DB from './db/db'


import {routes} from './routes/route';

// Initialization of express application
const app = express();

// Set up connection of database
DB.setUpConnection();

// Using bodyParser middleware
app.use( bodyParser.json() );

// Allow requests from any origin
app.use(cors({ origin: '*' }));

routes(app);

const server = app.listen(serverPort, function() {
    console.log(`Server is up and running on port ${serverPort}`);
});
