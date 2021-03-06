import { UserDatabase } from "../../data/user/userDatabase";
import { generateToken } from "../../services/authenticator";
import { compare, hash } from "../../services/hashManager";
import { generateId } from "../../services/idGenerator";
import { inputLoginDTO, user,userDataDTO } from "../../model/user";

export class UserBusiness {

    signupBusiness = async (
        userData: userDataDTO
     ):Promise<string> => {
        if (
           !userData.name ||
           !userData.nickname ||
           !userData.email ||
           !userData.password ||
           !userData.role
        ) {
           throw new Error('Preencha os campos "name","nickname", "email" e "password"')
        }
     
        const cypherPassword = await hash(userData.password);
     
        const newUser = { id: generateId(),
           ...userData,
           password: cypherPassword          
        }
     
        const userDatabase = new UserDatabase
        await userDatabase.create(newUser)
     
        const token: string = generateToken({
           id: newUser.id,
           role: userData.role
        })
     
        return token
     
     }

     loginBusiness = async (
       inputLogin: inputLoginDTO
     ) => {
        if (!inputLogin.email || !inputLogin.password) {
           throw new Error("'email' e 'senha' são obrigatórios")
        }
     
        
        const userDatabase = new UserDatabase()
        const user: user = await userDatabase.selectByEmail(inputLogin.email)
     
        if (!user) {
           throw new Error("Usuário não encontrado ou senha incorreta")
        }
     
            const passwordIsCorrect: boolean = await compare(inputLogin.password, user.password)
     
        if (!passwordIsCorrect) {
           throw new Error("Usuário não encontrado ou senha incorreta")
        }
     
        const token: string = generateToken({
           id: user.id,
           role: user.role
        })
     
        return token
     }
}