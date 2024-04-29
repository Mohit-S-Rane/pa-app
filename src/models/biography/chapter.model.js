import mongoose from "mongoose";

const chapterSchema = new mongoose.Schema({
    chapterName: {
        type: String,
        required: true
    },
    chapterDescription: {
        type: String,
        required: true
    },
    projectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project"
    },
    goalId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Goal"
    }
}, {timestamps: true})

export const Chapter = mongoose.model("Chapter", chapterSchema)