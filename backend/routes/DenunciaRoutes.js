const router = require('express').Router()

//controllers
const DenunciaController = require('../controllers/DenunciaController')


router.post('/register', DenunciaController.register)
router.get('/getall', DenunciaController.getAllComplaint)

module.exports = router
