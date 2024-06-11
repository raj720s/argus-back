import express from "express";
import { PORT } from "./config/variables";
import { Request, Response, NextFunction } from "express";
import cors from "cors";
import dbConnect from "./utils/dbConnect";

const app = express()
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})

app.listen(PORT, async () => {
    console.log('Example app listening on port ', PORT)
    await dbConnect()
})