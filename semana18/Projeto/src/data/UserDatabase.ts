import { BaseDatabase } from "./BaseDatabase";
import { User } from '../classes/User'

export default class UserDatabase extends BaseDatabase {

    constructor(){
        super()
    }

    public AddUser = async ( user: User ) => {
        await BaseDatabase.connection("labECommerce_user")
        .insert ( user )
    }
      public getAllUsers = async (order?: string): Promise<User[]> => {
          const result = await BaseDatabase.connection("labECommerce_user")
          .select("*")
          .orderBy("id",`${order}`)
          return result
       }
       public getUserById = async (id:number): Promise<User[]> =>{
           const result = await BaseDatabase.connection("labECommerce_user")
           .select("*")
           .where ("id", "=", `${id}`)
           return result
       }
    }
 


//         name: string,
//         sort: string,
//         order: string,
//         size: number,
//         offset: number
//     ) =>{
//         //com atributos estaticos, morre o this. Usamos
//         //o nome da classe toda
//         const result = await BaseDatabase.connection("labECommerce_user")
//          .where("name", "LIKE", `%${name}%`)
//          .orderBy(sort, order)
//          .limit(size)
//          .offset(offset)
//         console.log("aqui é na classe",result)
//         const user = result.map(userModel)

//       return result;
//     }

// }