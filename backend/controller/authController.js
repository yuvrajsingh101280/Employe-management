
import User from "../model/User.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()
const login = async (req, res) => {

    try {
        // we take the email and password from the req.body
        const { email, password } = req.body
        // once we get the email and password we will check whether the user is stored in our databse for that we will use findOne method 
        const user = await User.findOne({ email })
        if (!user) {

            return res.status(400).json({ success: false, error: "user not found" })
        }
        // here the password is mathched with the password we pass and the password of the user 

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {

            return res.status(400).json({ success: false, error: "Wrong password" })

        }

        // jswt(payload,)
        const token = jwt.sign({ _id: user._id, role: user.role }, process.env.JWT_KEY, { expiresIn: "10d" })
        res.status(208).json({ success: true, token, user: { _id: user.id, name: user.name, role: user.role } })

    } catch (error) {
        console.log(error.message)
        res.status(500).json({ success: false, error: "Server error" });
    }


}
export { login }