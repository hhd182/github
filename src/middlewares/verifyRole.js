import { notAuth } from "./handle_errors"

export const isAdmin = (req, res, next) => {
    const {role} = req.user
    if (role !== 'R1') return notAuth('require role admin', res)
    next()
}