import jwt from 'jsonwebtoken'
import { notAuth } from './handle_errors'

const verifyToken = (req, res, next) => {

    const token = req.headers.authorization
    if (!token) return notAuth('Missing token', res)
    const accessToken = token
    jwt.verify(accessToken, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return notAuth('Access token fail', res)
        }
        req.user = user
        next()
    })

}

export default verifyToken