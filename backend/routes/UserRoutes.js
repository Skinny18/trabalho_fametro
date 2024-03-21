const router = require('express').Router()

//controllers
const UserController = require('../controllers/UserController')


router.post('/login', UserController.login)

module.exports = router