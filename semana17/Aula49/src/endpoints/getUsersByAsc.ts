import { Request, Response } from "express"
import selectUsersByAsc from "../querys/selectUsersByAsc"


export const getUsersByAsc = async(req: Request,res: Response): Promise<void> =>{
   try {

      const sort = req.query.sort === "name" ? "name" : "id" ? "id" : "type" ? "type" : "email"
      const order = req.query.order === "DESC" ? "DESC" : "ASC" 

      const users = await selectUsersByAsc(sort, order)

      res.status(200).send(users)

   } catch (error:any) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}