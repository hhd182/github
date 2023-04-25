import user from './user'
import auth from './auth'
import login from './login'

const initRoutes = (app) => {

    app.use('/api/user', user)
    app.use('/api/auth', auth)
    app.use('/api/login', login)

    return app.use('/', (req, res) => {
        return res.send('SERVER ON')
    })
}

module.exports = initRoutes