import createHttpError from "http-errors"

export const internalServerErr = (res) => {
    const error = createHttpError.InternalServerError()
    return res.status(error.status).json({
        err: 1,
        mes: error.message
    })
}

export const apiNotFound = (req, res) => {
    const error = createHttpError.NotFound()
    return res.status(error.status).json({
        err: 1,
        mes: error.message
    })
}