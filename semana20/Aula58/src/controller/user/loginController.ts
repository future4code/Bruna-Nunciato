import { Request, Response } from "express"
import { loginBusiness } from "../../business/user/loginBusiness"


export const loginController = async (
   req: Request,
   res: Response
): Promise<void> => {
   try {
      const { email, password } = req.body

     const token = await loginBusiness(email,password)

      res.send({
         message: `Usuário logado!`,
         token
      })

   } catch (error:any) {
      res.status(400).send(error.message)
   }
}