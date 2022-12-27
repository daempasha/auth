import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config()

const PORT = process.env.PORT || 3000

const app = express()
app.use(cors())

app.get("/", (req, res) => { res.send("Hello") })

app.listen(PORT, () => {
    console.log("app started")
})