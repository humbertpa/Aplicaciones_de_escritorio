const express = require('express');
const router = require('express').Router();

const middlewares = require('./../middlewares')

const userRoutes = require('./usuarios');
const taskRoutes = require('./tareas');


router.use('',middlewares.auth);
router.use('',express.json());

router.use ('/usuarios', userRoutes);
router.use('/tareas',taskRoutes);

module.exports = router;