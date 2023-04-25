const router = require('express').Router()
import * as controllers from '../controllers'

router.get('/register', controllers.register)

module.exports = router