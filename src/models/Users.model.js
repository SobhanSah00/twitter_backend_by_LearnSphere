import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    fullname: {
        type: String,
        required: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
    },
    coverImage: {
        type: String,
    },
    refreshToken: {
        type: String,
    },
},
{
    timestamps : true
})

export default User = mongoose.model("User", UserSchema)