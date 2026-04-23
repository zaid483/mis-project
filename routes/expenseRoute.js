import { createExpense, getExpense } from "../controllers/expenseController.js";
import express from "express";

const routers = express.Router();

routers.get("/expense/add" , (req, res) => 
    res.render("expenseForm")
)

routers.get("/expense" , getExpense)
routers.post("/expense" , createExpense);

export default routers;