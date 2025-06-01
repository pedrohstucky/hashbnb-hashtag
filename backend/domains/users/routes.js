import { Router } from "express"
import User from "./model.js"
import bcrypt from "bcryptjs"
import { connectDB } from "../../config/db.js"

const router = Router()
const bcryptSalt = bcrypt.genSaltSync()

router.post("/", async (req, res) => {
    connectDB()

    const { name, email, password } = req.body
    const hashedPassword = bcrypt.hashSync(password, bcryptSalt)

    try {
        const newUserDocument = await User.create({
            name,
            email,
            password: hashedPassword
        })
        res.json(newUserDocument)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.get("/", async (req, res) => {
    connectDB()
    try {
        const userDocument = await User.find()
        res.json(userDocument)
    } catch (error) {
        res.status(500).json(error)
}})

export default router
