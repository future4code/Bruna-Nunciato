import express, { Request, Response } from 'express'
import cors from 'cors'

export const app = express()
app.use(express.json())
app.use(cors())


