const abonosCtrl = {};

const Abono = require('../models/AbonoModel')

// clasesCtrl.getClases = (req, res) => res.json({ message: ['Hola'] });
abonosCtrl.getAbonos = async (req, res) =>    {
        const abonos = await Abono.find();
        // res.json({ message: [clases] });
        res.json(abonos);
    }


module.exports = abonosCtrl;