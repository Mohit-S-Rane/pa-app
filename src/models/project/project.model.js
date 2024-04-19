import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    projectName: {
        type: String,
        required: true
    },
    projectDescription: {
        type: String,
        required: true
    },
    phaseId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Phase"
    }]

}, {timestamps: true})

export const Project = mongoose.model("Project", projectSchema)