import mongoose from 'mongoose';
import config from '../../config/config.json';

export const db  = async ()=>{
    try {
        mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`|| 'mongodb://localhost:27017/notes', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('Connected to DB!');
    }catch (e) {
        console.log('oops, we have problem with DB');
        process.exit();
    };
};