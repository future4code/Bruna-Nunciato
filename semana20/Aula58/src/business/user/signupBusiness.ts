import { insertUser } from "../../data/insertUser";
import { generateId } from "../../services/idGenerator";
import { USER_ROLES } from "../../types/user";
import {hash} from "../../services/hashManager"
import { generateToken } from "../../services/authenticator";

export const userBusiness = async (
    name:string,
    email:string,
    password:string,
    role:USER_ROLES
    ): Promise<any>=>{
    
    if (
        !name ||
        !email ||
        !password ||
        !role
     ) {
        throw new Error('Preencha os campos "name", "email" e "password"')
     }

     const id: string = generateId()

     const cypherPassword = await hash(password);

     await insertUser({
        id,
        name,
        email,
        password: cypherPassword,
        role
     })

     const token: string = generateToken({
        id,
        role: role
     })
     return token

}