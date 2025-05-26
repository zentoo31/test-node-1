import { Router } from "express";
import { AuthController } from "./auth.controller.mjs";

const AuthRouter = Router();

AuthRouter.post('/register', AuthController.register);
AuthRouter.post('/login', AuthController.login);

export default AuthRouter;