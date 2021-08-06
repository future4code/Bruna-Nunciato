import { Request, Response } from "express"
import { user, userModel } from "../types"
import  UserDatabase  from "../data/UserDatabase"

export async function getAllUsers(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const users = await new UserDatabase().getAllUsers();
      const UsersList= users.map(userModel)
      res.status(200).send(UsersList)

   } catch (error) {
      res.status(500).send("Erro servidor interno")
   }
}
