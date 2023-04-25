const router = require('express').Router()
import * as controllers from '../controllers'

router.get('/', controllers.getUser)

module.exports = router