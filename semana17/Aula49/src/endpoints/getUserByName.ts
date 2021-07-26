import selectUserByName from '../querys/selectUserByName'
import { Request, Response } from "express"

export const getUserByName = async(req: Request,res: Response): Promise<void> =>{
    try {
         const name:any = req.query.name || "%"
         const users = await selectUserByName(name)
        
      
       if(!users.length){
          res.statusCode = 404
          throw new Error("No recipes found")
       }
 
       res.status(200).send(users)
       
    } catch (error:any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }