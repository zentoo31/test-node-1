import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email:{
        type: String
    },
    password:{
        type: String
    },
    isActive:{
        type: Boolean,
        default: true
    }

}, {timestamps: true});


export default mongoose.model("User", UserSchema);