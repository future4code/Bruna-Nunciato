import { Request, Response } from "express";
import connection from "../connection";

export const getUserById = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const user = await connection.raw(
        `SELECT * FROM Users WHERE id = ${id}`
         );
      res.status(200).send(user);
    } catch (err:any) {
      res.status(500).send({
        message: err.message,
      });
    }
  }