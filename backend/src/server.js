import express, { urlencoded } from "express"
import env from "dotenv"
env.config()
import connectDb from "./config/db.js"

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const PORT = process.env.PORT || 3000

connectDb().then(()=>{

    app.listen(PORT, () => console.log(`The port has been running on ${PORT}`))
})
