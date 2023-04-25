import db from '../models'
import bcrypt from 'bcryptjs'

const hashPW = password => bcrypt.hashSync(password, bcrypt.genSaltSync(5))

export const register = ({ username, password }) => new Promise( async (resolve, reject) => {
    try {
        const response = await db.User.finOrCreate({
            where: { username },
            defaults: {
                username,
                password: hashPW(password)
            }
        })
        console.log(response[1]);
        resolve({
            err: response[1] ? 0 : 1,
            mes: response[1] ? 'Creat is successfully' : 'Username is used'
        })
        
        resolve({
            err: 0,
            mes: 'register service'
        })
    } catch (error) {
        reject(error)
    }
})