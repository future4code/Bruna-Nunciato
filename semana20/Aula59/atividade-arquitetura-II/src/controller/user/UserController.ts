import { Request, Response } from "express";
import { UserBusiness } from "../../business/user/userBusiness";
import { userDataDTO } from "../../model/user";

export class UserController {

    signup = async (
        req: Request,
        res: Response
     ) => {
        try {
           const { name, nickname, email, password, role } = req.body
     
           const userData: userDataDTO ={name, nickname, email, password, role}
           const userBusiness = new UserBusiness()
           const token: string = await userBusiness.signupBusiness(
              userData
           )
     
           res
              .status(201)
              .send({
                 message: "Usuário criado!",
                 token
              })
     
        } catch (error:any) {
           res.status(400).send(error.message)
        }
    }

    login = async (
        req: Request,
        res: Response
     ): Promise<void> => {
        try {
           const { email, password } = req.body
     
           const inputLogin = { email, password }
           const userBusiness = new UserBusiness()
           const token: string = await userBusiness.loginBusiness(inputLogin)
     
           res.send({
              message: "Usuário logado!",
              token
           })
     
        } catch (error:any) {
           res.status(400).send(error.message)
        }
     }

}