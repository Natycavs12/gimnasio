const abonosCtrl = {};

const Abono = require('../models/AbonoModel')

// clasesCtrl.getClases = (req, res) => res.json({ message: ['Hola'] });
abonosCtrl.getAbonos = async (req, res) => {
    const abonos = await Abono.find();
    // res.json({ message: [clases] });
    res.json(abonos);
}

abonosCtrl.updateAbono = async (req, res) => {
    const { nombreAbono, precio, duracionDias } = req.body;
    await Abono.findOneAndUpdate({ _id: req.params.id }, {
        nombreAbono: nombreAbono,
        precio: precio,
        duracionDias: duracionDias,
    });
    res.json({ message: 'Datos del ABONO actualizados correctamente DESDE CONTROLADOR' })
}


module.exports = abonosCtrl;