import mongoose from 'mongoose';
import '../models/note.js';
import config from '../config/config.json';
const Note = mongoose.model('Note');

export function setUpConnection() {
    mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);
}
export  function listNotes() {
    return Note.find();
};
export function createNote(data) {
    const note = new Note({
        title: data.title,
        text: data.text,
        color:data.color,
        date:new Date(),
    });
    return note.save();
};
export function deleteNote(id) {
    return Note.findById(id).remove();
};