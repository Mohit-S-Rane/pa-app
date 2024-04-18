import mongoose from "mongoose";

const teamSchema = new mongoose.Schema({
    teamName: {
        type: String,
        required: true
    },
    teamAdmin: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    teammate: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }]
}, { timestamps: true })

const Team = mongoose.model("Team", teamSchema)