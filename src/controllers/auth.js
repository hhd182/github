import * as services from "../services"
import { internalServerErr } from "../middlewares/handle_errors"

export const register = async (req, res) => {
    try {
        const { username, password } = req.body
        if (!username || !password) return res.status(400).json({
            err: 1,
            mes: 'Missing username or password'
        })
        const response = await services.register(req.body)
        return res.status(200).json(response)
    } catch (error) {
        return internalServerErr(res)
    }
}