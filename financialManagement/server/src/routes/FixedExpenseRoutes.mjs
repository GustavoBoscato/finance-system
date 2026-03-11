import express from "express";
import { Router } from "express";
import { createFixedExpense, getAllFixedExpense, getNameFixedExpense, updateFixedExpense } from "../controllers/FixedExpenseController.mjs";

export const fixedExpensiveRoutes = Router();

fixedExpensiveRoutes.get('/search/:name', getNameFixedExpense);
fixedExpensiveRoutes.get('/search', getAllFixedExpense);
fixedExpensiveRoutes.post('/', createFixedExpense);
fixedExpensiveRoutes.put('/updated/:id', updateFixedExpense);
