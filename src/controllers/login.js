import { internalServerErr } from "../middlewares/handle_errors"
import * as services from "../services"

export const login = async (req, res) => {
    try {
        const { username, password } = req.body
        if (!username || !password) return res.status(400).json({
            err: 1,
            mes: 'Missing username or password'
        })
        const response = await services.login(req.body)
        return res.status(200).json(response)
    } catch (error) {
        return internalServerErr(res)
    }
}