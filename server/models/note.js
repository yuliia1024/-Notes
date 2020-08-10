import mongoose from 'mongoose';
const Schema = mongoose.Schema;
export const NoteSchema = new Schema({
    title:{type:String},
    text:{type:String, required:true},
    color:{type:String},
    date:{type:Date}
});
