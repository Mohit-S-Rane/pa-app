import mongoose from "mongoose";

const chapterSchema = new mongoose.Schema({
    chapterName: {},
    chapterDescription: {},
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