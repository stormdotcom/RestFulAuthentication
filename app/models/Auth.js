import mongoose from "mongoose";

const authSchema = mongoose.Schema({
    name:{type:String},
    email:{type:String, unique:true},
    password:{type:String, unique:true},
    status:{type:Boolean, default:true, require:true}
})


const Auth = mongoose.model("User", authSchema);

export default Auth;