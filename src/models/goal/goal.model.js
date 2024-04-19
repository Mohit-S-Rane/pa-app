import mongoose from "mongoose";

const goalSchema = new mongoose.Schema({
    goalTitle: {
        type: String,
        required: true,
    },
    goalDescription: {
        type: String,
    },
    subGoal: [{
        subGoalIndex: {
            type: Number,
            required: true
        },
        subGoalTitle: {
            type: String,
            required: true,
        },
        subGoalDescription: {
            type: String,
        },

    }]
}, { timestamps: true })

export const Goal = mongoose.model("Goal", goalSchema)