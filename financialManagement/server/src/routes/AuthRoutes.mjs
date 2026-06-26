import { Router } from "express";
import { AuthMiddleware } from "../middlewares/Auth.mjs";
export const AuthRouter = Router();

AuthRouter.get('/auth', AuthMiddleware, (req, res) => {
  return res.json({
    message: 'Token validated successfully',
    user: req.user
  });
});