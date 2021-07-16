import {Request, Response} from 'express'
import {users} from '../data'
import {User} from '../types'

export const postUser = (
    res: Response,
    req: Request
)=>{
    let errorCode = 400
    try{
        console.log("chegando aqui")
    const { nome, cpf, dataDeNascimento } = req.body
    const newUser:User = {
        nome, 
        cpf, 
        dataDeNascimento,
        saldo: 0,
        extrato: [],
    }
    const dataAtual = new Date(dataDeNascimento).getTime() / (1000 * 60 *60 * 24 * 30 * 12)
    const anoAtual = new Date().getTime() / (1000 * 60 *60 * 24 * 30 * 12)
        console.log(`teste`,newUser)
    if ( nome && cpf && dataDeNascimento){
        const existentUser = users.find(u => u.cpf === cpf)
        if(existentUser){
            throw new Error("This account already exist")
        }
        if(anoAtual - dataAtual < 18){
            throw new Error("You must be over 18 to create an account")
        }
        users.push(newUser)
    res.status(201).send("Sucess")
}

    if ( !nome || !cpf || !dataDeNascimento){
        errorCode = 422
        throw new Error("Please check the fields")
    }
}
   
     catch(error){
        if (error instanceof Error){
        res.status(errorCode).send({message: error.message
        })
        console.log("errrrrooooooo")
    }

    }
}