import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import authRouter from "./routes/auth.js"

dotenv.config();
const app = express()
app.use(cors())
app.use(express.json())
// routes
app.use("/api/auth", authRouter)

app.listen(process.env.PORT, () => {

    console.log(`server is runnning at port ${process.env.PORT}`)

})