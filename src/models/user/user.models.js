import mongoose from 'mongoose'
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

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

userSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next()
    this.password = await bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            displayName: this.displayName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id: this._id
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}


export const User = mongoose.model("User", userSchema)