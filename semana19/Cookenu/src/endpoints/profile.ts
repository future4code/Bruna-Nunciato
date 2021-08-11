import {UserData} from "../data/UserData";
import { Request, Response } from "express";
import {Authentication} from "../services/Authentication";


const profile = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;

     
      const authenticationData = new Authentication().getData(token);

    //   if (authenticationData.role !== "normal") {
    //     throw new Error("Only a normal user can access this funcionality");
    //   }
  
      const user = await new UserData().getUserById(authenticationData.id);
  
      res.status(200).send({
        id: user.id,
        email: user.email,
        name: user.name,
       });
    } catch (err:any) {
      res.status(400).send({
        message: err.message,
      });
    }
  }
  export default profile