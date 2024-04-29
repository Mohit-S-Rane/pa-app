import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

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

biographySchema.plugin(mongooseAggregatePaginate)

export const Biography = mongoose.model("Biography", biographySchema)