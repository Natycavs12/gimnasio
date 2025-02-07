const { Schema, model } = require('mongoose');

// const claseSchema = new mongoose.Schema({
const claseSchema = new Schema({

    nombreClase: { type: String, required: true },
    instructor: { type: String, required: false }, // id del instructor
    // instructor: { id_instructor }, // id del instructor
    // dia: { type: String, required: true },
    dia: { type: [String], required: true }, // Array de días
    hora: { type: String, required: true },
    cupo: { type: Number, required: true }
});

// const Clase = mongoose.model('Clase', claseSchema);

module.exports = model('Clase', claseSchema);