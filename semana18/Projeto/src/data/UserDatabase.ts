import { userModel } from "../types";
import { BaseDatabase } from "./BaseDatabase";

export default class UserDatabase extends BaseDatabase {

    constructor(){
        super()
    }

    public getUser = async (
        name: string,
        sort: string,
        order: string,
        size: number,
        offset: number
    ) =>{
        //com atributos estaticos, morre o this. Usamos
        //o nome da classe toda
        const result = await BaseDatabase.connection("labECommerce_user")
         .where("name", "LIKE", `%${name}%`)
         .orderBy(sort, order)
         .limit(size)
         .offset(offset)
   
        const user = result.map(userModel)

      return result;
    }

}