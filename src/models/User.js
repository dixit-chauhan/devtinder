const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: 4
    },
    lastName: {
        type: String
    },
    emailId: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    gender: {
        type: String
    },
    age: {
        type: Number,
        min: 18
    },
    photo: {
        type: String,
        default: "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg"
    },
    skills: {
        type: [String]
    }
});

module.exports = mongoose.model('User', userSchema);