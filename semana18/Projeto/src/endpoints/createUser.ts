import { Request, Response } from "express";
import { User } from "../classes/User";
import { connection } from "../data/connection";
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
      const id: string = Date.now() + Math.random().toString()
  

    const newUser: user = new  User(id,name, email,age)

      await connection('labECommerce_user').insert(newUser)

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