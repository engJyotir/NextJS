import mongoose from "mongoose";
import { type } from "os";
const userSchema =  new mongoose.Schema({
    userName: {
        type: String,
        required: [true,"please provide username"],
        unique: true
    },
    email: {
        type: String,
        required: [true,"please provide email"],
        unique: true
    },
    password: {
        type: String,
        required: [true,"please provide password"]
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: String,
    verifyToken: String,
    verifyTokenExpiry: Date
})

const User = mongoose.models.user || mongoose.model("users",userSchema);
export default User;