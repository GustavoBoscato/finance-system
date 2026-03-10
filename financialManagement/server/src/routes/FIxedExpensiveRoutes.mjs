import express from "express";
import { Router } from "express";
import { createFixedExpensive, getAllFixedExpensive, getNameFixedExpensive } from "../controllers/FixedExpensiveController.mjs";

export const fixedExpensiveRoutes = Router();

fixedExpensiveRoutes.get('/search/:name', getNameFixedExpensive);
fixedExpensiveRoutes.get('/search', getAllFixedExpensive);
fixedExpensiveRoutes.post('/', createFixedExpensive);

