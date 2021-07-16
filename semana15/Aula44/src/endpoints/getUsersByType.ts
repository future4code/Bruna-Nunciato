import {Request, Response} from 'express'
import {users} from '../data'
import {User} from '../types'

export const getUsersByType =  (
    req: Request,
    res: Response,
)=>{
    let errorCode:number = 400
    try{
    const type: string = req.params.type as string
      const result:User[] | undefined = users.filter(
           user => user.type.toLowerCase === type.toLowerCase
        )
        if(!type){
            errorCode = 404
            throw new Error("User Type not found");
        }
        res.status(200).send(result)
        }catch(error){
        // res.status(errorCode).send({message: Error.message})
    }
}

