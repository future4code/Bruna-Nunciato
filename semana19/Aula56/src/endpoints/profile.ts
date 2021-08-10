import {User} from "../data/User";
import { Request, Response } from "express";
import getData from "../services/getData";


const profile = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;
  
     
      const authenticationData = getData(token);
  
      const user = await new User().getUserById(authenticationData.id);
  
      res.status(200).send({
        id: user.id,
        email: user.email,
        name: user.name,
        nickname: user.nickname,
        password: user.password
      });
    } catch (err:any) {
      res.status(400).send({
        message: err.message,
      });
    }
  }
  export default profile