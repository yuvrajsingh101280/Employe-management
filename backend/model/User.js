import mongoose from "mongoose"
const userSchema = new mongoose.Schema({

    name: {

        type: String,
        required: true,

    },
    email: {
        type: String,
        requires: true

    },
    password: {

        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        enum: ["admin", "employee"],


    },
    profileImage: {


        type: String
    },


    createdAt: {

        type: Date,
        default: Date.now

    },
    updatedAt: {

        type: Date,
        default: Date.now

    }
})
const User = mongoose.model("user", userSchema)
export default User