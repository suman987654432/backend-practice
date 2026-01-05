// const express = require("express");
// const router = express.Router();
// const Student = require("../models/userModel")

// //post method
// router.post("/", async (req, res) => {
//     const student = new Student({
//         name: req.body.name,
//         age: req.body.age,
//         course: req.body.course,
//         active: req.body.active,
//     });
//     try {
//         const studentData = await student.save()
//         res.json(studentData);
//     } catch (error) {
//         console.log("error" + error)
//     }
// })

// //get method
// router.get("/", async (req, res) => {
//     try {
//         const student = await Student.find()
//         res.json(student)

//     } catch (error) {
//         console.log("error" + error)
//     }
// })

// //get by id method
// router.get("/:id", async (req, res) => {
//     try {
//         const student = await Student.findById(req.params.id)
//         res.json(student);
//     } catch (error) {
//         console.log("error" + error)
//     }
// })

// //update method
// router.put("/:id", async (req, res) => {
//     try {
//         const student = await Student.findByIdAndUpdate(req.params.id, req.body);
//         res.json(student)
//     } catch (error) {
//         console.log("not updated", error)
//     }
// })

// //update with patch
// router.patch("/:id", async (req, res) => {
//     try {
//         const updatestudent = await Student.findByIdAndUpdate(
//             req.params.id,
//             { $set: req.body },
//             { new: true }

//         );
//         res.json(updatestudent) 
//     } catch (error) {
//         console.log("not patched" + error)
//     }
// })

// //delete method
// router.delete("/:id", async (req, res) => {
//     try {
//         const student = await Student.deleteOne({ _id: req.params.id });
//         // const student = await Student.findByIdAndDelete(req.params.id);
//         res.json(student)
//     } catch (error) {
//         console.log("deleted", + error)
//     }
// })
// module.exports = router;


const express = require("express")
const router = express.Router();
const { addStudent, getStudent, editDatabyid, deleteStudent, updateStudent } = require("../controllers/userController")

router.post("/", addStudent)
router.get("/", getStudent)
router.put("/:id", editDatabyid)
router.delete("/:id", deleteStudent)
router.patch("/:id", updateStudent)

module.exports = router;