

const dotenv = require("dotenv")

const jwt = require("jsonwebtoken")

dotenv.config()

const JWT_SECRET = process.env.JWT_SECRET;


const generateToken = (id) => {
    
   return jwt.sign({id},JWT_SECRET,{
        expiresIn: "1h"
    })
}

const authToken = (req,res,next) => {

    const header = req.headers["autherization"]
    
    const stringToken = header && header.split(' ')[1]

    const token = stringToken.replace(/"/g, '')

    if(!token) {

        return user.status(401).json({error: "Unathorized"})
    }

     jwt.verify(token,JWT_SECRET,(err,user) => {
     if(err){
            res.status(400).json({err: "invalid Token"})
        }
        req.user = user
    })
    next()
}


module.exports = {generateToken,authToken}