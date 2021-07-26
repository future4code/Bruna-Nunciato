import {Request, Response} from 'express'
import {users} from '../data'

export const getSaldo = (
    req: Request,
    res: Response
)=>{
    let errorCode = 400
    try{
        const nome: string = req.query.nome as string
        const cpf: string = req.query.cpf as string
      const user = users.find(user => user.nome.toLocaleLowerCase() === nome.toLocaleLowerCase()
      && user.cpf.toLocaleLowerCase() === cpf.toLocaleLowerCase())

      if (!user) {
          errorCode= 404
          throw new Error ('User not found')
      }
      res.status(200).send(user)
    }
    catch (error){
        if (error instanceof Error){
        res.status(errorCode).send({
            message: error.message
        })
    }
}
}