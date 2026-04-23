import express from "express";
import { createTeacher, deleteTeacher, getTeacher } from "../controllers/teacherController.js";

const teacherroute = express.Router(); 

teacherroute.get("/teachers/add" , (req , res)=>{
    res.render("teacherForm")
})
teacherroute.get("/teachers" , getTeacher)
teacherroute.post("/teachers", createTeacher);
teacherroute.get("/teachers/delete/:id" , deleteTeacher)


export default teacherroute;