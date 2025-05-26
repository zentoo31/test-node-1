import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description:{
        type: String
    },
    isCompleted:{
        type: Boolean,
        default: false
    }, 
    user:{
        type: mongoose.Schema.Types.ObjectId, ref: "User"
    }
}, {timestamps: true})

export default mongoose.model("Task", TaskSchema);