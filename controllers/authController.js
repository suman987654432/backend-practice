const user = require("../models/authModel")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//signup controller
const signUp = async (req, res) => {

    try {
        const hasshed = await bcrypt.hash(req.body.password, 10)
        const users = new user({
            email: req.body.email,
            password: hasshed
        })
        const userSave = await users.save()
        res.json(userSave)
    }

    catch (error) {
        console.log("login failed", error)
    }
}

//login controller
const login = async (req, res) => {
    try {
        const data = await user.findOne({ email: req.body.email })
        const compare = await bcrypt.compare(
            req.body.password,
            data.password
        )
        if (!compare) {
            return res.status(401).json({ message: "Invalid email password" })
        }
        const token = jwt.sign(
            { id: data._id },
            "SECRET_KEY",
            { expiresIn: "1h" }
        );
        res.json({ token })
    } catch (error) {
        res.status(500).json({ message: "login failed" })
    }
}

module.exports = {
    signUp,
    login
}