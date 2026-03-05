import express, { Router } from "express";
import { register, login } from "../controllers/UserController.mjs";
export const userRoutes = Router();

userRoutes.post('/register' , register);
