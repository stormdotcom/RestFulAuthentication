import Auth from "../models/Auth.js";

export const getAllUser = async (req, res)=>{
    try {
        const user = await Auth.find();
        if(!user) return res.status(400).send("No Entires Found");
        res.status(200).json(user)
    } catch (error) {
        res.status(500).send("something went wrong")
    }
}
