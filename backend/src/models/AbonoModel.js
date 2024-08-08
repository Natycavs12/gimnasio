// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

const { Schema, model } = require('mongoose');

const abonoSchema = new Schema({
  nombreAbono: { type: String, required: true },
  precio: { type: Number, required: true },
  duracionDias: { type: Number, required: true } // duración en días
});

const Abono = model('Abono', abonoSchema);

module.exports = Abono;
