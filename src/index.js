import dotenv from "dotenv"
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: './.env'
})

connectDB().then(()=> {
    app.on("error", (error)=> {
        console.log(`App is not able to talk with DB`);
        throw error
    })

    app.listen(process.env.PORT, ()=> {
        console.log(`Server is running on port : ${process.env.PORT}`);
    })
}).catch((err)=>{
    console.log(`MongoDB connection failed!!!, ${err}`);
})