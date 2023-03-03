const express = require("express");
const rutas = require("./rutas");
const routes = require('./src/rutas'); //como esa carpeta tiene un index.js, al importar la carpeta importa directamente ese archivo

require('dotenv').config();

const { engine } = require('express-handlebars');

//const port = 3000;
const port = process.env.PORT || 3000 // el proveedor no tendrá abierto el puerto 3000, por lo que será lo que se reciba del proveedor

const app = express();
app.engine('handlebars', engine());
app.set('view engine', 'handdlebars');
app.set('views', './src/views');
app.use('', routes); // se indica que se usará el middleware que se está importando
rutas(app);

const mongoose = require('mongoose');
const mongoUrl = process.env.MONGO_URL;
console.log(mongoUrl);

mongoose.connect(mongoUrl).then(() => {
    console.log('Se conectó correctamente');

    app.listen(port, () => {
        console.log("app is running in port " + port);
    });

}).catch(err => {
    console.log('No se pudo conectar a la base de datos');
    console.log(err);
})



