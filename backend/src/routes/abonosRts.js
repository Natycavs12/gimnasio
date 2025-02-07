const {Router} = require('express');
const router = Router();

const { getAbonos,updateAbono } = require('../controllers/abonos.controller');


router.route('/')
    // .get( (req,res) => res.send('GET - RUTAS SOCIOS') );
    .get(getAbonos)
    // .post(createSocio)

    router.route('/:id')
    // .get(get1Socio)
    .put(updateAbono)
    // .delete(deleteSocio)
    // .patch()

module.exports = router;