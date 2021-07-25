import { Request, Response } from "express";
import connection from "../connection";

export const editUserById = async (req:Request, res:Response) => {
        try {
           await connection("Users")
            .update({
              name: req.body.name,
             nickname: req.body.nickname,
             })
            .where({ id: req.params.id });
    
          res.status(200).send("updated data");
        } catch (error:any) {
          res.status(400).send(error.sqlMessage || error.message);
        }
      }