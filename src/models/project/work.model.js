import mongoose from "mongoose";

const workSchema = new mongoose.Schema({
    workName: {
        type: String,
        required: true
    },
    workDescription: {
        type: String,
        required: true
    },
    task: [{
        taskId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Task"
        },
        taskIndex: {
            type: Number,
            required: true
        },
        taskName: {
            type: Number,
            required: true
        }
    }]
}, {timestamps: true})

export const Work = mongoose.model("Work", workSchema)