import db from '../models'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const hashPW = password => bcrypt.hashSync(password, bcrypt.genSaltSync(5))

export const register = ({ username, password }) => new Promise( async (resolve, reject) => {
    try {
        const response = await db.User.findOrCreate({
            where: { username },
            defaults: {
                username,
                password: hashPW(password)
            }
        })
        const token = response[1] ? jwt.sign({id: response[0].id, username: response[0].username, role: response[0].role}, process.env.JWT_SECRET, {expiresIn: '2d'}) : null
        resolve({
            err: response[1] ? 0 : 1,
            mes: response[1] ? 'Create is successfully' : 'Username is used',
            token
        })
        
        resolve({
            err: 0,
            mes: 'register service'
        })
    } catch (error) {
        reject(error)
    }
})