import { Request, Response } from "express";
import { userBusiness } from "../../business/user/signupBusiness";


export const signupController = async (
   req: Request,
   res: Response
) => {
   try {
      const { name, email, password, role } = req.body
      
     const token = await userBusiness(name, email, password, role)
          
      res
      .status(201)
      .send({
          message: "Usuário criado!",
         token
      })

   } catch (error:any) {
      res.status(400).send(error.sqlMessage || error.message)
   }
}