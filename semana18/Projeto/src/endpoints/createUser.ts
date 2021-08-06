import { Request, Response } from "express";
import { User } from "../classes/User";
import { connection } from "../data/connection";
import UserDatabase from "../data/UserDatabase";
import { user} from "../types";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { name, email, age } = req.body

      if ( !name || !email || !age ) {
         res.statusCode = 422
         throw " 'name', 'email' e 'age' são obrigatórios"
      }
      const id: number = Math.round(((new Date()).getTime() & 0xffff))

      const newUser: User = new  User(id,name, email,age)
    
      await new UserDatabase().AddUser(newUser)

      res.status(201).send("Novo usuário inserido")

   } catch (error:any) {

      if (typeof error === "string") {

         res.send(error)
      } else {

         console.log(error.sqlMessage || error.message);
         res.status(500).send("Ops! Um erro inesperado ocorreu =/")
      }

   }
}