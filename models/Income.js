import mongoose from "mongoose";

const incomeSchema = new mongoose.Schema({

    
    amount: {
        type: Number,
        required: true,
    },
    source: {
        type: String,
        required : true,
    },
    description: {
      type: String,
      trim: true
    },
    date : {
        type : Date,
        default : Date.now,
    },

},
    {timestamps : true}
)

export default mongoose.model("Income" , incomeSchema)