import Teacher from "../models/Teacher.js";

export const createTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.create(req.body);

    // redirect to table page
    return res.redirect("/teachers"); 

  } catch (error) {
    res.status(500).send(error.message);
  }
};
export const getTeacher = async (req, res) => {
  try {
    const teachers = await Teacher.find();

    // render EJS
    res.render("teachers", { teachers }); 

  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const deleteTeacher = async (req , res) => {
  try{
    const  { id } = req.params;

    await Teacher.findByIdAndDelete(id);

    res.redirect("/teachers");
  }
  catch (error){
    res.status(500).send(error.message)
  }
}