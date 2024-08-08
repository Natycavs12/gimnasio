const { Router } = require('express');
const router = Router();

const { getClases, createClases, get1Clase,actualizaClase, eliminaClase } = require('../controllers/clases.controller');

router.route('/')
    // .get( (req,res) => res.send('GET - RUTAS CLASES') )
    // .post( (req,res) => res.send('POST - RUTAS CLASES') )
    // .get((req, res) => res.json({ message: 'GET Request - RUTAS CLASES' }))
    .get(getClases)
    .post(createClases)

router.route('/:id')
    .get(get1Clase)
    .put(actualizaClase)
    .delete(eliminaClase)

module.exports = router;