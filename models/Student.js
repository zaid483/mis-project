import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name : {type : String,
        required : true,
        trim : true
    },

    age : {type : Number,
        required : true
    },
    className : {   type: String,
      required: true,
    },
    
     feeStatus: {
      type: String,
      enum: ["paid", "unpaid", "partial"],
      default: "unpaid",
    },

},
{timestamps : true}

)

export default  mongoose.model("Student" , studentSchema)