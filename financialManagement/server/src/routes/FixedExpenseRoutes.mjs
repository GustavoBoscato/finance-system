import express from "express";
import { Router } from "express";
import { createFixedExpense, deleteFixedExpense, getAllFixedExpense, getNameFixedExpense, updateFixedExpense } from "../controllers/FixedExpenseController.mjs";

export const fixedExpensiveRoutes = Router();

fixedExpensiveRoutes.get('/search/:name', getNameFixedExpense);
fixedExpensiveRoutes.get('/search', getAllFixedExpense);
fixedExpensiveRoutes.post('/create', createFixedExpense);
fixedExpensiveRoutes.put('/update/:id', updateFixedExpense);
fixedExpensiveRoutes.delete('/delete/:id', deleteFixedExpense);
