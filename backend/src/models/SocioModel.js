const { Schema, model } = require('mongoose');

const sociosSchema = Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    dni: { type: String, required: true },
    telefono: { type: String, required: true },
    fechaNac: { type: String, required: true },
    // clase: { id_clase }, // id clases anotadas (puede ser mas de 1)
    // tipoAbono: { type: String, required: true }, //id abono
    // tipoAbono: { id_abono }, //id abono
    clase: [{ type: Schema.Types.ObjectId, ref: 'Clase' }], // referencia a la colección Clases
    tipoAbono: { type: Schema.Types.ObjectId, ref: 'Abono' }, // referencia a la colección Abonos
    pago: { type: Boolean, required: true, default: true },

})

module.exports = model('Socios', sociosSchema);