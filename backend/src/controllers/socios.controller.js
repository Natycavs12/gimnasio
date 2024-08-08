const sociosCtrl = {};

const Socio = require('../models/SocioModel')

// sociosCtrl.getSocios = (req, res) => res.json({ message: ['Todos los socios'] });
sociosCtrl.getSocios =  async (req, res) => {
    const socios = await Socio.find();
    // res.json({ message: 'muchos socios'})
    res.json(socios);
}

sociosCtrl.get1Socio = (req, res) => res.json({ id: '123', nombre: 'amancio' })

// sociosCtrl.createSocio = (req, res) => res.json({ message: 'Socio creado correctamente' })
sociosCtrl.createSocio = async (req, res) => {
    const {nombre, apellido, dni, telefono, fechaNac, pago} = req.body
    console.log(req.body);
    const newSocio = new Socio({
        nombre: nombre,
        apellido:apellido,
        dni: dni, 
        telefono: telefono, 
        fechaNac: fechaNac, 
        pago: pago
    })
    await newSocio.save();
    // console.log(newSocio);

    res.json({ message: 'Soci@ creado correctamente' })
}

// sociosCtrl.deleteSocio = (req, res) => res.json({ message: 'Socio eliminado correctamente' })
sociosCtrl.deleteSocio = async (req, res) => {
    await Socio.findByIdAndDelete(req.params.id)
    res.json({ message: 'Soci@ eliminado correctamente' })
}

// sociosCtrl.updateSocio = (req, res) => res.json({ message: 'Datos del Soci@ actualizados correctamente' })
sociosCtrl.updateSocio = async (req, res) => {
    const {nombre, apellido, dni, telefono, fechaNac ,pago } = req.body;
    await Socio.findOneAndUpdate({_id: req.params.id}, {
        nombre: nombre,
            apellido: apellido,
            dni: dni,
            telefono: telefono,
            fechaNac: fechaNac,
            pago: pago
        });
    res.json({ message: 'Datos del Soci@ actualizados correctamente' })
}


module.exports = sociosCtrl;