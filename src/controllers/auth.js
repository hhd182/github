import * as services from "../services"

export const register = async (req, res) => {
    try {
        const { username, password } = req.body
        if (!username || !password) return res.status(400).json({
            err: 1,
            mes: 'Missing username or password'
        })
        const response = await services.register({username, password})
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            mes: 'Internal Server Error'
        })
    }
}