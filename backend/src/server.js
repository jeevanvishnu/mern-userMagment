import env from "dotenv"
env.config()
import express from "express"
import userMagment from "./router/userManagment.js"
import connectDb from "./config/db.js"

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api/user',userMagment)

const PORT = process.env.PORT || 3000

connectDb().then(()=>{

    app.listen(PORT, () => console.log(`The port has been running on ${PORT}`))
})
