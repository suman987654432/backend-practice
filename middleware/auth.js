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