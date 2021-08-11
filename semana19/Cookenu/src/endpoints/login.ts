import { Request, Response } from "express";
import {UserData} from "../data/UserData";
import { Authentication } from "../services/Authentication";
import HashManager from "../services/HashManager";


const login = async (req: Request, res: Response) => {
    try {

      if (!req.body.email || req.body.email.indexOf("@") === -1) {
        throw new Error("Invalid email");
      }
  
      const { email, password} = req.body
      
      const user = await new UserData().getUserByEmail(email);
      
      
      const hm = new HashManager()
      const compare =  await hm.compare(password, user.password)

      if (!compare) {
        throw new Error("Invalid password");
      }
        
      const token = new Authentication().generateToken({
        id: user.id
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