import { Router } from "express";
import { createVariableExpense, deleteVariableExpense, getAllVariableExpense, 
    updateVariableExpense, getNameVariableExpense } from "../controllers/VariableExpense.mjs";

    export const variableExpenseRouter = Router();

    variableExpenseRouter.get('/search', getAllVariableExpense);
    variableExpenseRouter.get('/search/:name', getNameVariableExpense);
    variableExpenseRouter.post('/create', createVariableExpense);
    variableExpenseRouter.put('/update/:id', updateVariableExpense);
    variableExpenseRouter.delete('/delete/:id', deleteVariableExpense);