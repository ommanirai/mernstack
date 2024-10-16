const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    username: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        temporaryAddress: [String],
        permanentAddress: {
            type: String,
            required: true
        }
    },
    phone: {
        type: Number
    },
    dob: {
        type: Date
    },
    gender: {
        type: String,
        enum: ["male", 'female', 'others']
    },
    role: {
        type: String,
        enum: ["super-admin", 'admin', 'user'],
        default: "user"
    },
    isActivated: {
        type: Boolean,
        default: false
    }
})

const UserModel = mongoose.model("user", UserSchema)
module.exports = UserModel