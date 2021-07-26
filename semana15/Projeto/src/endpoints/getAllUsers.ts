import { Request, Response } from "express"
import {users} from '../data'

export const getAllUsers = (
    req: Request,
    res: Response
 ): void => {
     try{
        if(!users.length){
            res.statusCode = 404
            throw new Error ("Nenhuma conta encontrada")
        }
         res.status(200).send(users)
 
     }catch(error){
        if (error instanceof Error){
         res.status(400).send(error.message)
     }
    }
    }