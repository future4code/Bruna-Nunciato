import { Request, Response } from "express"
import {users} from '../data'

export const getAllUsers = (
    req: Request,
    res: Response
 ): void => {
    let errorCode = 400
    try{
         res.status(200).send(users)

     }catch(error){
         res.status(errorCode).send({message: "something is wrong"})
     }
    }