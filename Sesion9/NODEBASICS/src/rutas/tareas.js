const router = require('express').Router();

router.get('',function (req,res) {
    res.send('Listado de tareas ' + req.usuario);
})

module.exports = router;