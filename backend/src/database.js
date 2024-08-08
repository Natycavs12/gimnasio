const mongoose = require('mongoose');

// console.log("ruta db:" + process.env.MONGO_URI);
// const URI = 'mongodb://localhost:27017/gimnasio';
const URI = process.env.MONGO_URI 
            ? process.env.MONGO_URI 
            : 'mongodb://localhost/dbtest';

mongoose.connect(URI, {
        // useNewURLParser : true,
        // useCreateIndex : true,
        // useFindAndModify: false
    }
);

const connection = mongoose.connection;

connection.once('open', ()=>{
    console.log('DB is connected');
})