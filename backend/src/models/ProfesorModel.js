const { Schema, model } = require('mongoose');

const profesoresSchema = Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    dni: { type: String, required: true },
    telefono: { type: String, required: true },
    fechaNac: { type: String, required: true },
    // clase: { id_clase }, // id clases anotadas (puede ser mas de 1)
    clase: { type: Schema.Types.ObjectId, ref: 'Clase' }, // referencia a la colección Clases //cada prof da 1 sola clase

})

module.exports = model('Profesores', profesoresSchema);