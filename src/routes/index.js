import user from './user'
import auth from './auth'
import login from './login'
import { apiNotFound } from '../middlewares/handle_errors'

const initRoutes = (app) => {

    app.use('/api/user', user)
    app.use('/api/auth', auth)
    app.use('/api/login', login)

    app.use(apiNotFound)
}

module.exports = initRoutes