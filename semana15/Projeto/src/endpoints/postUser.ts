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
    const { nome, cpf, dataDeNascimentoAsString } = req.body
    const [day, month, year] = dataDeNascimentoAsString.split("/")
    const dataDeNascimento: Date = new Date(`${year}-${month}-${day}`)

    const idadeEmSegundos: number = Date.now() - dataDeNascimento.getTime()
    const idadeEmAnos: number =idadeEmSegundos / 1000/ 60/ 60/ 24/ 365

    if (idadeEmAnos<18){
        res.statusCode= 406
        throw new Error("idade deve ser maior que 18 anos")
    }
  
    // // const dataAtual = new Date(dataDeNascimento).getTime() / (1000 * 60 *60 * 24 * 30 * 12)
    // // const anoAtual = new Date().getTime() / (1000 * 60 *60 * 24 * 30 * 12)
    // //     console.log(`teste`,newUser)
    // if ( nome && cpf && dataDeNascimento){
    //     const existentUser = users.find(u => u.cpf === cpf)
    //     if(existentUser){
    //         throw new Error("This account already exist")
    //     }
    //     if(anoAtual - dataAtual < 18){
    //         throw new Error("You must be over 18 to create an account")
    //     }
        users.push({
            nome, 
            cpf,
            dataDeNascimento,
            saldo: 0,
            extrato: []
        })
    res.status(201).send("Conta criado com sucesso!")
}

//     if ( !nome || !cpf || !dataDeNascimento){
//         errorCode = 422
//         throw new Error("Please check the fields")
//     }
// }
   
     catch(error){
         console.log(error)
        if (error instanceof Error){
        res.send({message: error.message
        })
        
    }

    }
}