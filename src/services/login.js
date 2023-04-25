import db from '../models'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const login = ({ username, password }) => new Promise( async (resolve, reject) => {
    try {
        const response = await db.User.findOne({
            where: { username },
            raw: true
        })
        const checkPassword = response && bcrypt.compareSync(password, response.password)
        const token = checkPassword ? jwt.sign({id: response.id, username: response.username, role: response.role}, process.env.JWT_SECRET, {expiresIn: '2d'}) : null
        resolve({
            err: token ? 0 : 1,
            mes: token ? 'Login is successfully' : response ? 'Password is wrong': 'Username has been created',
            token
        })
    } catch (error) {
        reject(error)
    }
})