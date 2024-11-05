
import User from "../model/User.js"
import bcrypt from "bcrypt"
const login = async (req, res) => {

    try {
        // we take the email and password from the req.body
        const { email, password } = req.body
        // once we get the email and password we will check whether the user is stored in our databse for that we will use findOne method 
        const user = await User.findOne({ email })
        if (!user) {

            res.status(400).json({ success: false, error: "user not found" })
        }
        // here the password is mathched with the password we pass and the password of the user 

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {

            res.status(400).json({ success: false, error: "Wrong password" })

        }


    } catch (error) {
        console.log(error.message)
    }


}
export { login }