const path = require('path')
const express = require('express')
const middlewares = require('./src/middlewares')

function middleware(req, res, next) {
    console.log("pasa por aqui");
    next();
}

module.exports = function (app) {

    app.use('/assets', express.static(path.join(__dirname,'assets')));

    app.get("/", middlewares.auth, function (req, res) {
        //res.send("Usuario validado");
        //console.log("api works llego a root");
        const ruta = path.join(__dirname, 'index.html');
        res.sendFile(ruta);

    });

    app.get('/',function (req,res) {
        res.render('inicio')
    })

    function cargarUsuarios(req, res) {
        console.log("Ejecucion de cargarUsuarios");
        res.send("Lista de usuarios con token");
    }

    //app.get("/usuarios", authMiddleware, cargarUsuarios);

    app.get("/usuarios/:id", middlewares.auth, function (req,res) {
        res.send('Datos del usuario' + req.params.id);

    });

    app.get('/assets/:archivo', function (req, res) {
        const ruta = path.join(__dirname, 'assets', 'estilos.css');
        res.sendFile(ruta)
    })

    app.post("/login",express.json(), function (req,res) {
        console.log(req.body);
        res.send('datos correctos');
    });

    app.get("*", function (req, res) {
        res.status(404).send("Pagina no encontrada");
    }
    );
    // Express ejecuta codigo de arriba hacia abajo. Si se coloca el get del comodin al inicio, anula todas las demás rutas
}
