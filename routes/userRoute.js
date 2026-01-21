const express = require("express")
const router = express.Router();
const auth = require("../middleware/auth")
const adminAuth = require("../middleware/adminAuth")
const { addStudent, getStudent,getStudentbyid, editDatabyid, deleteStudent, updateStudent } = require("../controllers/userController")


router.get("/admin", adminAuth, async (req, res) => {
    res.json({ message: "Admin data" })
})
router.get("/protected", auth, async (req, res) =>
     { res.json({ message: "Protected data" }); });

router.post("/", addStudent)
router.get("/", getStudent)
router.get("/:id", getStudentbyid)
router.put("/:id", auth, updateStudent)
router.delete("/:id", auth, deleteStudent)
router.patch("/:id", auth, editDatabyid)

module.exports = router;