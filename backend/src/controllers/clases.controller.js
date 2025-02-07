const clasesCtrl = {};

const Clase = require('../models/ClaseModel')

// clasesCtrl.getClases = (req, res) => res.json({ message: ['Hola'] });
clasesCtrl.getClases = async (req, res) => {
    const clases = await Clase.find();
    // res.json({ message: [clases] });
    res.json(clases);
}

// clasesCtrl.createClases = (req, res) => res.json({ message: 'Clase agregada correctamente' });
clasesCtrl.createClase = async (req, res) => {
    // console.log(req.body);
    try {
        var { nombreClase, dia, hora, cupo } = req.body
        if (!nombreClase || !dia || !hora || !cupo) {
            // var { nombreClase, instructor, dia, hora, cupo } = req.body
            // if (!nombreClase || !instructor || !dia || !hora || !cupo) {
                return res.status(400).json({ message: 'Todos los campos son obligatorios' });
        }
        const newClase = new Clase({
            nombreClase,
            // instructor,
            dia,
            hora,
            cupo,
        })
        await newClase.save();
        console.log("nueva clase por controlador"+newClase);

        res.json({ message: 'Clase agregada correctamente' });
    } catch (error) {
        console.error('Error al crear la clase CONTROLADOR:', error);
        res.status(500).json({ message: 'Error interno en CONTROLADOR al crear la clase', error: error.message });
    }
}
// clasesCtrl.get1Clase = (req, res) => res.json({ titulo: 'Yoga' });
clasesCtrl.get1Clase = async (req, res) => {
    // console.log(req.params.id);
    const clase = await Clase.findById(req.params.id);
    // console.log(clase);
    res.json(clase);

};

clasesCtrl.actualizaClase = async (req, res) => {
    // console.log(req.params.id, req.body);
    const { nombreClase, instructor, dia, hora, cupo } = req.body;
    await Clase.findOneAndUpdate({ _id: req.params.id }, {
        nombreClase: nombreClase,
        instructor: instructor,
        dia: dia,
        hora: hora,
        cupo: cupo,
    });

    res.json({ message: 'Clase actualizada correctamente' })
};

//clasesCtrl.eliminaClase = (req, res) => res.json({ message: 'Clase eliminada correctamente' });
clasesCtrl.eliminaClase = async (req, res) => {
    // await Clase.findByIdAndDelete(req.params.id)
    // res.json({ message: 'Clase eliminada correctamente' });
    try {
        const deletedClase = await Clase.findByIdAndDelete(req.params.id);
    
        if (!deletedClase) {
          return res.status(404).json({ message: 'Clase no encontrada CONTROLADOR' });
        }
    
        res.json({ message: 'Clase eliminada con éxito CONTROLADOR' });
      } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la clase CONTROLADOR', error });
      }
}



module.exports = clasesCtrl;