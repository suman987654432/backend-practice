const express = require("express");
const app = express();
const mongoose = require("mongoose")

//middleware
app.use(express.json())

//connecting to mongodb
mongoose.connect("mongodb://localhost:27017/student")
    .then(() => {
        console.log("Mongodb connected")
    }).catch((err) => {
        console.log("Error" + err)
    })


const userRouter = require("./routes/userRoute.js");
const authRouter = require("./routes/authRoute.js")
app.use("/auth", authRouter)
app.use("/students", userRouter)


app.listen(4000, () => {
    console.log("Server is running on port 4000");
})


