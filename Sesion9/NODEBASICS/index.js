const express = require("express");
const rutas = require("./rutas");

const routes = require('./src/rutas'); //como esa carpeta tiene un index.js, al importar la carpeta importa directamente ese archivo

const port = 3000;

const app = express();

app.engine('handlebars',engine());
app.set('view engine','handdlebars');
app.set('views','./src/views');

app.use('',routes); // se indica que se usará el middleware que se está importando

rutas(app);

app.listen(port, () => {
    console.log("app is running in port " + port);
}
);

