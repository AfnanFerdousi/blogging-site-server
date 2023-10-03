import mongoose from "mongoose"
import app from "./app.js"
import dotenv from "dotenv"
dotenv.config()

const port = process.env.PORT || 5000

async function main() {
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log("DB connected")

        app.listen(port, () => {
            console.log(`Server is running on port ${port}`)
        })

    } catch (error) {
        console.log("failed", error)
        
    }    
}
main()