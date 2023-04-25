import db from '../models'

export const getID = (userId) => new Promise( async (resolve, reject) => {
    try {
        const response = await db.User.findOne({
            where: { id: userId },
        })
        resolve({
            err: response ? 0 : 1,
            mes: response ? 'Got success' : 'Not found user',
            userData: response
        })
        
    } catch (error) {
        reject(error)
    }
})

