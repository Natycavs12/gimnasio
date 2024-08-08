const clasesCtrl = {};

const Clase = require('../models/ClaseModel')

// clasesCtrl.getClases = (req, res) => res.json({ message: ['Hola'] });
clasesCtrl.getClases = async (req, res) =>    {
        const clases = await Clase.find();
        // res.json({ message: [clases] });
        res.json(clases);
    }

// clasesCtrl.createClases = (req, res) => res.json({ message: 'Clase agregada correctamente' });
clasesCtrl.createClases = async (req, res) => {
    // console.log(req.body);
    const {nombreClase, instructor, dia, hora, cupo} = req.body
    const newClase = new Clase({
        nombreClase: nombreClase, 
        instructor: instructor, 
        dia: dia, 
        hora: hora, 
        cupo: cupo
    })
    await newClase.save();
    console.log(newClase);

    res.json({ message: 'Clase agregada correctamente' });
};

// clasesCtrl.get1Clase = (req, res) => res.json({ titulo: 'Yoga' });
clasesCtrl.get1Clase = async (req, res) => 
{
    // console.log(req.params.id);
    const clase = await Clase.findById(req.params.id);
    // console.log(clase);
    res.json(clase);

};

clasesCtrl.actualizaClase = async (req, res) => {
    // console.log(req.params.id, req.body);
    const {nombreClase, instructor} = req.body;
    await Clase.findOneAndUpdate({_id: req.params.id}, {
            nombreClase: nombreClase,
            instructor: instructor
        });

    res.json({ message: 'Clase actualizada correctamente' })
};

//clasesCtrl.eliminaClase = (req, res) => res.json({ message: 'Clase eliminada correctamente' });
clasesCtrl.eliminaClase = async (req, res) => {
    await Clase.findByIdAndDelete(req.params.id)
    res.json({ message: 'Clase eliminada correctamente' });
}



module.exports = clasesCtrl;