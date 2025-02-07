const sociosCtrl = {};

const Socio = require('../models/SocioModel')

// sociosCtrl.getSocios = (req, res) => res.json({ message: ['Todos los socios'] });
sociosCtrl.getSocios = async (req, res) => {
    const socios = await Socio.find();
    // res.json({ message: 'muchos socios'})
    res.json(socios);
    // console.log("socios obtenidos desde CONTROLADOR");
    // res.status(201).json({ message: 'socios obtenidos desde CONTROLADOR'});

}

sociosCtrl.get1Socio = (req, res) => res.json({ id: '123', nombre: 'amancio' })

// sociosCtrl.createSocio = (req, res) => res.json({ message: 'Socio creado correctamente' })
sociosCtrl.createSocio = async (req, res) => {
    try {
        var { nombre, apellido, dni, telefono, correo, fechaNac } = req.body;
        // var { nombre, apellido, dni, telefono, correo, fechaNac, nombreAbono } = req.body;
        // console.log("req.body CONTROLADOR"+req.body.nombreAbono);
        if (!nombre || !apellido || !dni || !telefono || !correo || !fechaNac ) {
            // if (!nombre || !apellido || !dni || !telefono || !correo || !fechaNac || !nombreAbono) {
            return res.status(400).json({ message: 'Todos los campos son obligatorios' });
        }
        const newSocio = new Socio({
            nombre,
            apellido,
            dni,
            telefono,
            correo,
            fechaNac,
            // tipoAbono:nombreAbono,
            // pago: pago !== undefined ? pago : true,
        });
        await newSocio.save();
        res.status(201).json({ message: 'Socio creado correctamente CONTROLADOR', socio: newSocio });

    } catch (error) {
        console.error('Error al crear el soci CONTROLADOR:', error);
        res.status(500).json({ message: 'Error interno en CONTROLADOR al crear el socio', error: error.message });
    }
}

// sociosCtrl.deleteSocio = (req, res) => res.json({ message: 'Socio eliminado correctamente' })
sociosCtrl.deleteSocio = async (req, res) => {
    // await Socio.findByIdAndDelete(req.params.id)
    // res.json({ message: 'Socio eliminado correctamente DESDE CONTROLADOR' })
    // console.log("el id del socio a eliminar es (CONTROLADOR)",req.params.id);
    try {
        const deletedSocio = await Socio.findByIdAndDelete(req.params.id);
    
        if (!deletedSocio) {
          return res.status(404).json({ message: 'Socio no encontrado CONTROLADOR' });
        }
    
        res.json({ message: 'Socio eliminado con éxito CONTROLADOR' });
      } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el socio CONTROLADOR', error });
      }
}

// sociosCtrl.updateSocio = (req, res) => res.json({ message: 'Datos del Soci@ actualizados correctamente' })
sociosCtrl.updateSocio = async (req, res) => {
    const { nombre, apellido, dni, telefono, correo, fechaNac, tipoAbono } = req.body;
    await Socio.findOneAndUpdate({ _id: req.params.id }, {
        nombre: nombre,
        apellido: apellido,
        dni: dni,
        telefono: telefono,
        correo:correo,
        fechaNac: fechaNac,
        // tipoAbono: tipoAbono,
        // pago: pago,
    });
    res.json({ message: 'Datos del Socio actualizados correctamente DESDE CONTROLADOR' })
}


module.exports = sociosCtrl;