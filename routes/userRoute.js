const express = require("express")
const router = express.Router();
const { addStudent, getStudent, editDatabyid, deleteStudent, updateStudent } = require("../controllers/userController")

router.post("/", addStudent)
router.get("/", getStudent)
router.put("/:id", editDatabyid)
router.delete("/:id", deleteStudent)
router.patch("/:id", updateStudent)

module.exports = router;