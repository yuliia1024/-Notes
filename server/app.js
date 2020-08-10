import express from 'express';
import bodyParser from 'body-parser'
import { serverPort } from '../config/config.json';
import *as db from './db/db'
db.setUpConnection();

const app = express();

app.use(bodyParser.json())
app.get('/notes', (req,res)=>{
    db.listNotes().then(data=>{
        res.send(data);
    });
});
app.post('/notes', (req,res)=>{
    db.createNote(req.body).then(data=>res.send(data))
});
app.delete('/notes/:id', (req,res)=>{
    db.deleteNote(req.body).then(data=>res.send(data))

});


const server = app.listen(serverPort, ()=>{
    console.log(`server is running on port ${serverPort}`);

});
