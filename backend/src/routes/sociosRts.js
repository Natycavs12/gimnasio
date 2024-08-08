const {Router} = require('express');
const router = Router();

const { getSocios,get1Socio, createSocio, updateSocio, deleteSocio } = require('../controllers/socios.controller');


router.route('/')
    // .get( (req,res) => res.send('GET - RUTAS SOCIOS') );
    .get(getSocios)
    .post(createSocio)

    router.route('/:id')
    .get(get1Socio)
    .put(updateSocio)
    .delete(deleteSocio)
    // .patch()

module.exports = router;