import mongoose from "mongoose";

const phaseSchema = new mongoose.Schema({
    projectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project"
    },
    workList: [{
        workId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Work"
        },
        workIndex: {
            type: Number,
            required: true
        },
        workName: {
            type: Number,
            required: true
        }
    }]
}, { timestamps: true })

const Phase = mongoose.model("Phase", phaseSchema)