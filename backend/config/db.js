import "dotenv/config"
import mongoose from "mongoose"

const { MONGO_URL } = process.env

export const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URL)
        console.log("Connected to MongoDB")
    } catch (error) {
        console.log(error)
    }
}
