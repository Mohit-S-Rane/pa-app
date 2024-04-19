import mongoose from "mongoose";

const phaseSchema = new mongoose.Schema({
    phaseIndex: {
        type: Number,
        required: true
    },
    phaseName: {
        type: Number,
        required: true
    },
    projectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project"
    },
    workListId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Work"
    }
}, { timestamps: true })

const Phase = mongoose.model("Phase", phaseSchema)