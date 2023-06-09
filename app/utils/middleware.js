import jwt from "jsonwebtoken";
import Auth from "../models/Auth.js";

const config = process.env;

export const verifyToken = async(req, res, next)=> {
    try {
        let token =  req.query.token || req.headers['authorization'];
        if(!token) return res.status(403).send("token required for Authentication")
       // token = token.split(" ")[1];
        const decodedToken = jwt.verify(token, config.JWT_SECRET)
        const user = await Auth.findOne({_id: decodedToken.userId, status:true});
        if(!user) return res.status(401).send("The user status in inactive")
        req.user=decodedToken
        next()
    } catch (error) {
          res.status(401).send("token required for Authentication \n " + error.message)
    }
 
} 