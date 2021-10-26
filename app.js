import express from "express";
import cors from 'cors';
import * as dotenv from 'dotenv';
import authRouter from "./route/auth.js";
import invalidRoute from "./route/invalidRoute.js";
import connect from "./config/database.js";

dotenv.config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true, limit: '50mb' }))
app.use(cors())

app.use('/auth', authRouter)
app.use('*',invalidRoute)
connect(app) 


