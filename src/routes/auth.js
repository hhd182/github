const router = require('express').Router()
import * as controllers from '../controllers'

router.post('/register', controllers.register)

module.exports = router