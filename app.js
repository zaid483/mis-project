import connectDB from "./config/database.js";
import express from "express";
import dotenv from "dotenv"
import router from "./routes/studentRoute.js";
import teacherroute from "./routes/teacherRoute.js";
import Student from "./models/Student.js";
import Teacher from "./models/Teacher.js";
import createincome from "./routes/incomeRoute.js";
import Income from "./models/Income.js";
import routers from "./routes/expenseRoute.js";
import Expense from "./models/Expense.js";
dotenv.config();
const app = express();

connectDB();


app.set("view engine" , "ejs");
app.set("views" , "./views")   

app.use(express.json());
app.use(express.urlencoded({extended : true}))

app.get("/dashboard", async (req, res) => {
  try {
    const studentsCount = await Student.countDocuments();
    const teachersCount = await Teacher.countDocuments();

    // ✅ FETCH INCOME DATA FIRST
    const incomes = await Income.find();

    // ✅ CALCULATE TOTAL INCOME
    const totalIncome = incomes.reduce((sum, item) => {
      return sum + (item.amount || 0);
    }, 0);

    const expenses = await Expense.find();

    const totalExpense = expenses.reduce((sum, item) => {
      return sum + (item.amount || 0);
    }, 0);

    const profit = totalIncome - totalExpense;

    res.render("dashboard", {
      studentsCount,
      teachersCount,
      totalIncome,
      totalExpense,
      profit
    });

  } catch (error) {
    res.status(500).send(error.message);
  }
});


app.use("/", router);
app.use("/" , teacherroute)
app.use("/" , createincome)
app.use("/", routers)

// start server
app.listen(3000, () => {
  console.log(`Server running on http://localhost:3000`);
});