import mongoose from "mongoose";


const connectToDatabase = async () => {

    try {

        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Connected to MongoDB successfully");
    } catch (error) {
        console.log("cannot connect to database", error)
    }


}
export default connectToDatabase;