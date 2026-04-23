import express from "express";
import { insertStudent, getStudents, deleteStudent, editStudent, updateStudent } from "../controllers/studentController.js";

const router = express.Router();


router.get("/students/add", (req, res) => {
  res.render("studentForm");
});

router.post("/students", insertStudent);

router.get("/students", getStudents);

router.get("/students/delete/:id", deleteStudent);
// Show edit form
router.get("/students/edit/:id", editStudent);

// Update student
router.post("/students/update/:id", updateStudent);

export default router;