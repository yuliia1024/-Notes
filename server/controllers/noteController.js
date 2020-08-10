import mongoose from 'mongoose';
import {NoteSchema} from '../models/note';
const Note = mongoose.model('Note', NoteSchema);

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