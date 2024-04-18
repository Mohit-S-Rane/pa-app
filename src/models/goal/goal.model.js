import mongoose from "mongoose";

const goalSchema = new mongoose.Schema({
    goalTitle:{
        type: String,
        required: true,
    },
    goalDescription: {
        type: String,
    },
    subGoalId: [{
        type: String
    }]
}, {timestamps: true})

export const Goal = mongoose.model("Goal", goalSchema)