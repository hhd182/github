import createError from 'http-errors'

export const internalServerError = (res, error) => {
    console.error(error);
    const errMessage = error && error.message ? error.message : 'Internal Server Error';
    const errorResponse = {
        err: -1,
        mes: errMessage
    };
    return res.status(500).json(errorResponse);
}

export const notFound = (req, res) => {
    const error = createError.NotFound('Not found route')
    return res.status(error.status).json({
        err: 1,
        mes: error.message
    })
}
export const notAuth = (err, res) => {
    const error = createError.Unauthorized(err)
    return res.status(error.status).json({
        err: 1,
        mes: error.message
    })
}