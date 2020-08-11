import {listNotes,
        deleteNote,
        createNote} from '../controllers/noteController';


export const routes = (app)=> {
    app.route('/notes').get((req, res) => {
        listNotes().then(data => {
            res.send(data);
        })
    });
    app.route('/notes').post( (req,res)=>{
        createNote(req.body).then(data=>res.send(data))
    });
    app.route('/notes/:id').delete((req,res)=>{
        deleteNote(req.body).then(data=>res.send(data))

    });
}
