
import * as controller from '../controllers/note';//del

export const routes = (app)=> {
    app.route('/notes').get((req, res) => {
        controller.listNotes().then(data => {
            res.send(data);
        })
    });
    app.route('/notes').post((req, res) => {
        controller.createNote(req.body).then(data => res.send(data))
    });
    app.route('/notes/:id').delete((req, res) => {
        controller.deleteNote(req.body).then(data => res.send(data))

    });
}