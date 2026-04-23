import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true
    },

    subject : {
        type : String,
        required : true,
    },

    salary : {
        type : Number,
        required : true,
    },

    phone : {
        type : String
    },
},
  {timestamps : true}
);

export default mongoose.model("Teacher" , teacherSchema)