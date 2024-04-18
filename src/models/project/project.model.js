import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    phase: [{
        phaseId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Phase"
        },
        phaseIndex: {
            type: Number,
            required: true
        },
        phaseName: {
            type: Number,
            required: true
        }
    }]

}, {timestamps: true})

export const Project = mongoose.model("Project", projectSchema)