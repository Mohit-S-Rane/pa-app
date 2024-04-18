import mongoose from 'mongoose'

const validRoles = ['user', 'admin', 'moderator'];

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    displayName: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    contactNo: {
        type: String,
        required: true,
        unique: true,
    },
    profession: {
        type: String,
        required: true
    },
    goalId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Goal"
    }],
    biographyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Biography"
    },
    projectId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project"
    }],
    teamId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Team"
    }]
}, { timestamps: true })

export const User = mongoose.model("User", userSchema)