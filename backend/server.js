const dotenv = require("dotenv")
dotenv.config();

console.log(process.env.PORT)

const express = require("express")
const cors = require("cors")
const path = require("path")
const app = express();
app.use(express.json())
app.use(cors())
const PORT = process.env.PORT
const connectDB = require("./config/db") 
const authRoutes = require("./routes/authRoutes") 
const incomeRoutes = require("./routes/incomeRoutes")
const expenseRoutes = require("./routes/expenseRoutes")
const dashboardRoutes = require("./routes/dashboardRoutes")
connectDB();

app.use("/api/v1/auth", authRoutes)
app.use("/api/v1/income", incomeRoutes)
app.use("/api/v1/expense", expenseRoutes)
app.use("/api/v1/dashboard", dashboardRoutes)

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.listen(PORT, ()=>{
    console.log(`Listening to port ${PORT}`)
})