import express from 'express'
import {loginRequest, registerRequest, fetchUserRequest }from "../controllers/auth/authController.js";
import verifyToken from "../middleware/auth/auth.js"

const authRouter = express.Router()

authRouter.post('/login',loginRequest)

authRouter.post('/register',registerRequest)

authRouter.get('/:mssv',verifyToken, fetchUserRequest)

export default authRouter