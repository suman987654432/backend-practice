const mongoose = require("mongoose")
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    age: {
        type: Number,
    },
    course: {
        type: String,
    },
    active: {
        type: Boolean,
        default: false,
    }
})
module.exports = mongoose.model("Student", studentSchema)