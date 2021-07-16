import {Request, Response} from 'express'
import {users} from '../data'
import {User} from '../types'

export const postUser = (
    res: Response,
    req: Request
)=>{
    let errorCode:number = 400
    try{
    const {id, name, type, email, age} = req.body
    const newUser:User = {
        id, name,type, email, age
    }
    if (!id || !name || !type || !age){
        errorCode = 422
        throw new Error("Please check the fields")
    }
    users.push(newUser)
    res.status(201).send("Sucess")
    }catch(error){
        res.status(errorCode).send({message: 
            "algo estranho ocorrendo"
            // error.message
        })

    }
}