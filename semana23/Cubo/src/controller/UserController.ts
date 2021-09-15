import { Request, Response } from "express";
import { UserInputDTO } from "../model/User";
import { UserBusiness } from "../business/UserBusiness";
import { BaseDatabase } from "../data/BaseDatabase";
import { UserDatabase } from "../data/UserDatabase";

export class UserController {
    async add(req: Request, res: Response) {
        try {

            const input: UserInputDTO = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                participation: req.body.participation
            }
            const userBusiness =
            new UserBusiness( new UserDatabase());
            const total = await userBusiness.createUser(input);

            res.status(200).send({message:"participante adicionado", total });

        } catch (error) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }

    async get(req: Request, res: Response) {

        try {
            const userBusiness =
            new UserBusiness( new UserDatabase());
           
            const result = await userBusiness.getAllData();

            res.status(200).send( result );

        } catch (error) {
            res.status(400).send({ error: error.message });
        }
        await BaseDatabase.destroyConnection();
    } 
    async del(req: Request, res: Response){
        try {
            const userBusiness =
            new UserBusiness( new UserDatabase());

            await userBusiness.delTable()

            res.status(200).send({ message: `tabela deletada com sucesso`})
        }catch (error) {
            res.status(400).send({ error: error.message });
        }
        await BaseDatabase.destroyConnection();
    }

}