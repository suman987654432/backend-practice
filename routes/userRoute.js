const express = require("express")
const router = express.Router();
const auth = require("../middleware/auth")
const { addStudent, getStudent, editDatabyid, deleteStudent, updateStudent } = require("../controllers/userController")


router.get("/protected", auth, async (req, res) => { res.json({ message: "Protected data" }); });

router.post("/", addStudent)
router.get("/", auth, getStudent)
router.put("/:id", auth, updateStudent)
router.delete("/:id", auth, deleteStudent)
router.patch("/:id", auth, editDatabyid)

module.exports = router;