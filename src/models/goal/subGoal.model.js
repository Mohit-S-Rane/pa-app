import mongoose from "mongoose";

const subGoalSchema = new mongoose.Schema({
    subGoalTitle:{
        type: String,
        required: true,
    },
    subGoalDescription: {
        type: String,
    },
}, {timestamps: true})

export const SubGoal = mongoose.model("SubGoal", subGoalSchema)