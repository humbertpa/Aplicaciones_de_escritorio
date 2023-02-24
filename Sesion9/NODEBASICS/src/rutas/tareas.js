const router = require('express').Router();

router.get('',function (req,res) {
    //res.send('Listado de tareas ' + req.usuario);
    const tareas = [
        { titulo : 'Tarea 1' , status : 'nueva'},
        { titulo : 'Tarea 2' , status : 'en progreso'},
        { titulo : 'Tarea 3' , status : 'completa'},
    ]

})

router.post('',function (req,res) {
    console.log('Se crea la tarea ',req.body);
    res.send('tarea creada correctamente');
})

router.get('/:id',function (req,res) {
    const tarea = {
        titulo : 'Tarea 1',
        status : 'nueva',
    }
})


module.exports = router;