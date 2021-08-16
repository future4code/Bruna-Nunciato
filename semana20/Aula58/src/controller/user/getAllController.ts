import { Request, Response } from "express"
import { getAllBusiness } from "../../business/user/getAllBusiness"
import { getTokenData } from "../../services/authenticator";

export const getAllController = async (
   req: Request,
   res: Response
): Promise<void> => {
   try {

    const token = req.headers.authorization!;
  const okUser = await getTokenData(token) 

    if (!token){
        throw new Error('preencha o token válido')
    }
    if(okUser){
     const All = await getAllBusiness()
       res.status(200).send({
         All
      })

    }
   } catch (error:any) {
      res.status(400).send(error.message)
   }
}