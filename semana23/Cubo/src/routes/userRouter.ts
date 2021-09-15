import express from "express";
import { UserController } from "../controller/UserController";


export const userRouter = express.Router();

const userController = new UserController();

userRouter.post("/add", userController.add);
userRouter.get("/get", userController.get);
userRouter.delete("/table/delete", userController.del)