const express = require("express");
const app = express();
const mongoose = require("mongoose")
const userRouter = require("./routes/userRoute.js");
const authRouter = require("./routes/authRoute.js")
//middleware
app.use(express.json())

//connecting to mongodb
mongoose.connect("mongodb://localhost:27017/student")
    .then(() => {
        console.log("Mongodb connected")
    }).catch((err) => {
        console.log("Error" + err)
    })

app.use("/auth", authRouter)
app.use("/students", userRouter)


app.listen(4000, () => {
    console.log("Server is running on port 4000");
})
MONGOURI=mongodb+srv://sumanqaj9876_db_user:NZfmbKlOSPm1VBfB@cluster0.ykwsx1q.mongodb.net/?appName=Cluster0
STRIPE_SECRET_KEY=sk_test_51SnCbAHFeLQhzbfNGjdwhVmrE77gPrJB5C31bIp46EC1cIOHDRAq5zNyrYTgb6KdAlHuocuHg4FU8v0Uyd6pZaUO00irhh7J3B
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here
STRIPE_PUBLISHABLE_KEY=pk_test_51SnCbAHFeLQhzbfN7N9XWfuigFJmIEFUKlehJlFr1wBlKOK1fvVWHNQb4chTsQOtIW5Js3bCueIwOIO0W0Sz87SE00f9UmrrU2


