import { Router } from "express";
import { createVariableIncome, getNameVariableIncome, getAllVariableIncome, deleteVariableIncome, updateVariableIncome } 
from "../controllers/VariableIncomeController.mjs";

export const variableIncomeRoutes = Router();

variableIncomeRoutes.get('/search', getAllVariableIncome);
variableIncomeRoutes.get('/search/:name', getNameVariableIncome);
variableIncomeRoutes.post('/create', createVariableIncome);
variableIncomeRoutes.put('/update/:id', updateVariableIncome);
variableIncomeRoutes.delete('/delete/:id', deleteVariableIncome);