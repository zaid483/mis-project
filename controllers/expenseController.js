import Expense from "../models/Expense.js";

export const createExpense = async (req, res) => {
    try{
         await Expense.create(req.body);
         res.redirect("/expense")

    }
    catch (error) {
        res.status(500).send(error.message);
    }
};

export const getExpense = async (req , res) => {
    try{
        const expenses = await Expense.find();

        const totalExpense = expenses.reduce((sum, item) => {
      return sum + (item.amount || 0);
    }, 0);

    res.render("expense", {
        expenses,
        totalExpense
    });

    }
    catch (error){
        res.status(500).send(error.message)
    }
};