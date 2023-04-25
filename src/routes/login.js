const router = require('express').Router()
import * as controllers from '../controllers'

router.post('/login', controllers.login)

module.exports = router