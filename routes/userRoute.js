const express = require("express")
const router = express.Router();
const { addStudent, getStudent, editDatabyid, deleteStudent, updateStudent } = require("../controllers/userController")

router.post("/", addStudent)
router.get("/", getStudent)
router.put("/:id", updateStudent)
router.delete("/:id", deleteStudent)
router.patch("/:id", editDatabyid)

module.exports = router;