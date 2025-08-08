import mongoose from "mongoose"
import env from "dotenv"
env.config()

const URL = process.env.MONGODB_URL

const connectDb = async () =>{
    try {
       await mongoose.connect(URL)
        console.log(`Database Connected sucessfully`);
        
    } catch (error) {
        console.log(`Database Connection Failed ${error}`);
        
    }
}

export default connectDb