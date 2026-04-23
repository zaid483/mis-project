import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
  
   amount : {
    type : Number,
    required : true,
   },

   category : {
    type : String,
    required : true
   },

   description : {
    type : String,
    trim : true
   },

   date : {
    type : Date,
    default : Date.now,
 },
},
    {timestamps : true}
);

export default mongoose.model("Expense" , expenseSchema)