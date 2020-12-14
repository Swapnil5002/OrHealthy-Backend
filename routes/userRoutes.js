const express = require('express')
const router = express.Router()

const UserController = require('../controllers/UserController')

//UI Routes
router.get('/login', UserController.loginForm)

//Process
router.post('/login', UserController.loginProcess)

module.exports = router