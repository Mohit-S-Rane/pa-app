import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    taskName: {
        type: String,
        required: true
    },
    taskDescription: {
        type: String,
        required: true
    },
    taskStartDate: {
        type: Date,
        required: true
    },
    taskDeadlineDate: {
        type: Date
    },
    taskIsCompleted: {
        type: Boolean,
        default: false
    },
    teamInvolve: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Team"
    }],
    peopleInvolved: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }]

}, {timestamps: true})

export const Task = mongoose.model("Task", taskSchema)