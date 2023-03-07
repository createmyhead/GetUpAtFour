import express from 'express'
const createError = require('http-errors')


const cacthErr = (app) => {
    app.use((req, res, next) => {
        next(createError.NotFound('This route does not exist.'));
    });
    app.use(function (req, res, next) {
        if (!req.user) return next(createError(401, 'Please login to view this page.'))
        next()
    })
    app.use((err, req, res, next) => {
        res.json({
            status: err.status || 500,
            message: err.message
        })
    });
}
export default cacthErr;