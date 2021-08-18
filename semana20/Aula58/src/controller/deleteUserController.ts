import { Request, Response } from "express"
import { deleteUserBusiness } from "../business/user/deleteUserBusiness"
import { getTokenData } from "../services/authenticator";


export const deleteUserController = async (
   req: Request,
   res: Response
): Promise<void> => {
   try {
      const id = req.params.id
      
    const token = req.headers.authorization!;
    const okUser = await getTokenData(token) 

      if (!token){
          throw new Error('preencha o token válido')
      }
      if(okUser){

         await deleteUserBusiness(id)

        res.status(200).send({
        message: "Usuário  apagado com sucesso!"
        })
      }
    
   } catch (error:any) {
      res.status(400).send(error.message)
   }
}