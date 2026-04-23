import express from "express";
import { createIncome, getIncome } from "../controllers/incomeController.js";

const createincome = express.Router();

createincome.get("/income/add" , (req , res) => {
    res.render("incomeForm")
})

createincome.get("/income" , getIncome)
createincome.post("/income" , createIncome)

export default createincome;