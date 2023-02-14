function middleware(req, res, next) {
    console.log("pasa por aqui");
    next();
}

function middlewareToken(req, res, next) {

    const token = req.query.token;
    if (token === "123") {
        next();
    } else {
        res.status(401).send("Not Authenticated")
    }
}

module.exports = function (app) {

    app.get("/", middlewareToken, function (req, res) {
        res.send("Usuario validado");
        console.log("api works llego a root");
    }
    );

    function cargarUsuarios(req, res) {
        console.log("Aqui");
        res.send("Lista de usuarios con token");
    }

    app.get("/usuarios", middlewareToken, cargarUsuarios);

    app.get("*", function (req, res) {
        res.status(404).send("Pagina no encontrada");
    }
    );
    // Express ejecuta codigo de arriba hacia abajo. Si se coloca el get del comodin al inicio, anula todas las demás rutas
}
