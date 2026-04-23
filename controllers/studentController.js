import Student from "../models/Student.js";

export const insertStudent = async (req, res) => {
  try {
    await Student.create(req.body);

    console.log("data is inserted");

    // redirect to students page
    res.redirect("/students");

  } catch (error) {
    console.log(error.message);

    res.status(500).send(error.message);
  }
};

export const getStudents = async (req, res) => {
  try {
    const students = await Student.find();

    res.render("students", { students });

  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const deleteStudent = async (req , res) => {
  try{
    const {id} = req.params;

    await Student.findByIdAndDelete(id);

    res.redirect("/students");
  }
  catch (error){
    res.status(500).send(error.message)
  }
}

export const editStudent = async (req ,res) => {
  try{
    const student = await Student.findById(req.params.id)
    res.render("studentEdit" , {student})
  }
  catch(error){
    res.stutus(500).send(error.message)
  }
}

export const updateStudent = async(req, res) => {
  try {
    await Student.findByIdAndUpdate(req.params.id , req.body);
    res.redirect("/students")
  }
  catch(error){
    res.status(500).send(error.message)
  }
}