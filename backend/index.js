import "dotenv/config"
import express from "express";
import UsersRoutes from "./domains/users/routes.js"

const app = express()
const { PORT } = process.env

app.use(express.json())
app.use("/users", UsersRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})