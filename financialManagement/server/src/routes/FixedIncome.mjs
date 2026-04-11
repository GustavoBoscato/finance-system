import { Router } from "express";
import { createFixedIncome, updateFixedIncome, deleteFixedIncome, getAllFixedIncome, getNameFixedIncome } from "../controllers/FixedIncome.mjs";
export const fixedIncomeRoutes = Router();

fixedIncomeRoutes.get('/search', getAllFixedIncome);
fixedIncomeRoutes.get('/search/:name', getNameFixedIncome);
fixedIncomeRoutes.post('/create', createFixedIncome);
fixedIncomeRoutes.put('/update/:id', updateFixedIncome);
fixedIncomeRoutes.delete('/delete/:id', deleteFixedIncome);


