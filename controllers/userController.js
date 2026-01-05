const Student = require("../models/userModel");

//add student
const addStudent = async (req, res) => {
    const student = new Student({
        name: req.body.name,
        age: req.body.age,
        course: req.body.course,
        active: req.body.active,
    });
    try {
        const studentdata = await student.save();
        res.json(studentdata);
    } catch (error) {
        console.log("error" + error)
    }
}

//read student
const getStudent = async (req, res) => {
    try {
        const student = await Student.find(req.query);
        res.json(student)
    } catch (error) {
        console.log("error" + error)
    }
}

//editbyid
const updateStudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(student)
    } catch (error) {
        console.log("error " + error)
    }
}


//edit with patch
const editDatabyid = async (req, res) => {
    try {
        const student = await Student.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.json(student)
    } catch (error) {
        console.log("error" + error)
    }
}


//delete student
const deleteStudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);
        res.json(student);
    } catch (error) {
        console.log("error", error)
    }
}

module.exports = {
    addStudent,
    getStudent,
    editDatabyid,
    deleteStudent,
    updateStudent,
}
