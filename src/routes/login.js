const router = require('express').Router()
import * as controllers from '../controllers'

router.get('/login', controllers.login)

module.exports = router