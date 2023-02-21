module.exports = function authMiddleware(req, res, next) {

    const token = req.query.token;
    if (token === "123") {
        req.usuario = "John doe"
        next();
    } else {
        res.status(401).send("Not Authenticated")
    }
}