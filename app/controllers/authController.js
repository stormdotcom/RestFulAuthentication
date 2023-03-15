import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Auth from "../models/Auth.js";

export const login = async (req, res)=>{
    const {email, password} = req.body;
    try {
        const user = await Auth.findOne({email: email});
        if(!user) return res.status(404).send("No User Found");
        const id = user._id.toString();
        const isPassword = await bcrypt.compare(password, user.password)
        if(!isPassword) return res.status(403).send("Invalid credentials")
        const token = jwt.sign({userId:id, email}, process.env.JWT_SECRET, {expiresIn: "2h"});
        console.log("4", token)
        res.status(200).json({user: {id, token}})
    } catch (error) {
        console.log("error", error)
        res.status(501).send("something went wrong \n " + error )
    }
}

export const register  = async(req, res)=> {
    const {email, password, name} = req.body;
    try {
        const isExists = await Auth.findOne({email: email});
        if(isExists) return res.status(409).send("User already exists, please  try different email");
        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await Auth.create({email, password:hashedPassword, name});
        const token = jwt.sign({userId:result._id, email}, process.env.JWT_SECRET, {expiresIn: "2h"});
        res.status(201).json(token)
    } catch (error) {
        res.status(500).send("something went wrong \n", error)
    }
}