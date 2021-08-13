import {FollowerData} from "../data/FollowerData";
import { Request, Response } from "express";
import {Authentication} from "../services/Authentication";
import { UserData } from "../data/UserData";


const toFollow = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;
      const id_following = req.body.id

      if (!id_following) {
        res.statusCode = 422
        throw "'id' de quem você deseja seguir é obrigatório"
    }
     
      const authenticationData = new Authentication().getData(token);

  
      if (id_following === authenticationData.id) {
        res.statusCode = 422
        throw "Você não pode seguir você mesmo!"
    }
   const result = await new UserData().getUserById(id_following);
      console.log(result, `id invalido`)
      if(!result){
        res.statusCode = 422
        throw "usuário não encontrado, id inválido!"
      }
    // const userSearch = new FollowerData()
    // const checkUser = await userSearch.alreadyFollowing(authenticationData.id,id_following)
    // console.log(checkUser)
    // if (checkUser){
    //     res.statusCode = 422
    //     throw "Você já segue esta pessoa"
    // }
    //   if (authenticationData.role !== "normal") {
    //     throw new Error("Only a normal user can access this funcionality");
    //   }
  
      const user = await new FollowerData().following(authenticationData.id,id_following);
      
      if (result && authenticationData.id){

      const user_following = result.name

        res.status(200).send(`Você está seguindo ${user_following}  `);
      }
    } catch (err:any) {
      res.status(400).send({
        message: err.message 
      });
    }
  }
  export default toFollow