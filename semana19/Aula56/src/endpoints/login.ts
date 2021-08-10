import { Request, Response } from "express";
import {User} from "../data/User";
import { Authentication } from "../services/Authentication";
import HashManager from "../services/HashManager";


const login = async (req: Request, res: Response) => {
    try {

      if (!req.body.email || req.body.email.indexOf("@") === -1) {
        throw new Error("Invalid email");
      }
  
      const userData = {
        email: req.body.email,
        password: req.body.password,
        role: req.body.role
      };
  
  
      const user = await new User().getUserByEmail(userData.email);
      
      
      const hm = new HashManager()
      const compare =  await hm.compare(userData.password, user.password)

      if (!compare) {
        throw new Error("Invalid password");
      }
  
      
      const token = new Authentication().generateToken({
        id: user.id,
        role: user.role
      });
  
      res.status(200).send({
        token,
      });
    } catch (err:any) {
      res.status(400).send({
        message: err.message,
      });
    }
  }
  export default login