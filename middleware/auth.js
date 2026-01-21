const jwt = require("jsonwebtoken")
const auth = (req, res, next) => {
    const header = req.headers.authorization; 
    if (!header) {
        return res.status(401).json({ message: "Token nahi mila" });
    }

    //here split use  the bearer and get only token
    const token = header.split(" ")[1];
    try {
        const decode = jwt.verify(token, "SECRET_KEY"); 
        req.user = decode;
        next();
    } catch (error) {
        res.status(401).json({ message: "token is wrong" })
    }
}
module.exports = auth;

// const express = require('express');
// const mongoose = require('mongoose');
// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({extended:true}))
// const User = require("./model/user.model")
// const jwt = require("jsonwebtoken");
// app.post("/api/auth/register",async(req,res)=>{
//     //username,email,password from req body
//     //check if email already exist, if yes --> response already exist please login
//     //if not create a new user?
//     try {
//         let {username, email,password} = req.body;
//     let userExist =await User.findOne({email:email});
//     if(userExist){
//         return res.json({
//             success:false,
//             message:"User already exist"
//         })
//     }
//     let newUser = new User({
//         username:username,
//         email:email,
//         password:password
//     })
//     await newUser.save();
//     res.json({
//         success:true,
//         message:"User register successfully"
//     })
        
//     } catch (error) {
//         console.log(error.message);
//         res.json({
//             success:false,
//             message:"something went wrong"
//         })
//     }
    
// })
// app.post("/api/auth/login",async(req,res)=>{
//     //email password from req.body
//     //check if email exist or not, if not--> email is not registered
//     //if yes --> check if password match with db password
//     //if not--> password is incorrect , if yes --> -- create token(jwt)--> response -->token
//     let {email,password} = req.body;
//     let user = await User.findOne({email:email});
//     if(!user){
//         return res.json({
//             success:false,
//             message:"email not register"
//         })
//     }
//     if(user.password!=password){
//         return res.json({
//             success:false,
//             message:"password incorrect"
//         })
//     }
//     let token =jwt.sign({id:user._id},"okok") ;
//     console.log(token);
//     res.json({
//         success:true,
//         message:"login successfull",
//         token:token
//     })

// })
// app.get("/home", isLogin,async(req,res)=>{
//     let userId = req.userId
//     let user= await User.findById(userId)
//     res.json("welcome" + user.username)
// })
// function isLogin(req,res,next){
//     /**
//      * extract token from req.headers.authorization
//      * if no token --> user not login
//      * if token ---> valid or not
//      * it not valid --> invalid token
//      * if valid pass request
//      */
//     let token = req.headers.authorization;
//     console.log(token);
//     if(!token){
//         return res.json({
//             success:false,
//             message:"not logged in"
//         })
//     }
//     let decode = jwt.verify(token,"okok")
//     console.log(decode);
//     req.userId = decode.id;
//     next();
// }



// mongoose.connect('mongodb://127.0.0.1:27017/test')
// .then(()=>console.log('db connected'))
// app.listen(7687,()=>{
// console.log('server started')
// })