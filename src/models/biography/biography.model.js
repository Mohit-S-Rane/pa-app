import mongoose from "mongoose";

const biographySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    chapterId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Chapter"
    }
},{timestamps: true})

export const Biography = mongoose.model("Biography", biographySchema)