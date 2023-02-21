const router = require('express').Router();

// '' = '/'

router.get('', function (req,res) {
    res.send('Listado de usuarios');
});

router.post('', function(req,res){
    console.log('Datos del usuario: ',req.body);
    res.send('Usuario creado');
})

module.exports = router;

