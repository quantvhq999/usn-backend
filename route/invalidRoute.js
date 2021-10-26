import express from 'express'


const invalidRoute = express.Router()

invalidRoute.get('*', function (req, res) {
    res.status(401).json({
        message: "Invalid route",
        status: false
    });
})

invalidRoute.post('*', function (req, res) {
    res.status(401).json({
        message: "Invalid route",
        status: false
    });
})

export default invalidRoute