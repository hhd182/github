import * as controllers from '../controllers'
import verifyToken from '../middlewares/verifyToken'
import express from 'express'
import { isAdmin } from '../middlewares/verifyRole'

const router = express.Router()

router.use(verifyToken)
// router.use(isAdmin)
router.get('/', controllers.getCurrent)

module.exports = router