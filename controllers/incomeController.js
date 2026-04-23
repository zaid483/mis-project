import Income from "../models/Income.js";

export const createIncome = async (req , res) => {
    try{
        const income = await Income.create(req.body);
        res.redirect("/income")
        
    }
    catch(error){
        res.status(500).send(error.message);
    };
}

export const getIncome = async (req, res) => {
  try {
    const incomes = await Income.find();

    // 👉 total calculation
    const totalIncome = incomes.reduce((sum, item) => {
      return sum + item.amount;
    }, 0);

    return res.render("income", {
      incomes,
      totalIncome
    });

  } catch (error) {
    return res.status(500).send(error.message);
  }
};