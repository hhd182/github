import user from './user'
import auth from './auth'

const initRoutes = (app) => {

    app.use('/api/user', user)
    app.use('/api/auth', auth)

    return app.use('/', (req, res) => {
        return res.send('SERVER ON')
    })
}

module.exports = initRoutes