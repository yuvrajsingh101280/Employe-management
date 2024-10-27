
import User from "./model/User.js"
import connectToDatabase from "./database/db.js"
import dotenv from "dotenv"
import bcrypt from "bcrypt"
dotenv.config();
connectToDatabase();
const userRegister = async () => {



    try {

        const hashedPassword = await bcrypt.hash("admin", 10)
        const newUser = new User({
            name: "admin",
            email: "admin@gmail.com",
            password: hashedPassword,
            role: "admin",


        })

        await newUser.save()
        console.log("user register successfully")

    } catch (error) {
        console.log(error)
    }
}
userRegister()