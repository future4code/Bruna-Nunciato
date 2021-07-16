import {Request, Response} from 'express'
import {users} from '../data'

export const getUserByName = (
    req: Request,
    res: Response
)=>{
    let errorCode = 400
    try{
        const name: string = req.query.name as string
      const user = users.find(user => user.name.toLocaleLowerCase() === name.toLocaleLowerCase())
      if (!user) {
          errorCode= 404
          throw new Error ('User not found')
      }
      res.status(200).send(user)
    }
    catch (error){
        res.status(errorCode).send({
            message: "nao sei"
            // error.message
        })
    }
}