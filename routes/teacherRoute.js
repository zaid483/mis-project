import express from "express";
import { createTeacher, deleteTeacher, editTeacher, getTeacher, updateTeacher } from "../controllers/teacherController.js";

const teacherroute = express.Router(); 

teacherroute.get("/teachers/add" , (req , res)=>{
    res.render("teacherForm")
})
teacherroute.get("/teachers" , getTeacher)
teacherroute.post("/teachers", createTeacher);
teacherroute.get("/teachers/delete/:id" , deleteTeacher)
teacherroute.get("/teachers/edit/:id" , editTeacher)
teacherroute.post("/teachers/update/:id" , updateTeacher)

export default teacherroute;