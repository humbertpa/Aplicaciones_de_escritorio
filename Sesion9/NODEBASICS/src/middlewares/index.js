/*

const authMiddleware = require('./auth');

module.exports = {
    auth : authMiddleware
}
*/ // Es lo mismo

const auth = require('./auth');

module.exports = {
    auth
}