import db from '../models'

export const login = ({ username, password }) => new Promise( async (resolve, reject) => {
    try {
        const response = await db.User.findOne({
            where: { username },
            raw: true
        })
        console.log(response)
        resolve({
            err: response ? 0 : 1,
            mes: response ? 'Login is successfully' : 'Error login',
            response
        })
        
        resolve({
            err: 0,
            mes: 'login service'
        })
    } catch (error) {
        reject(error)
    }
})