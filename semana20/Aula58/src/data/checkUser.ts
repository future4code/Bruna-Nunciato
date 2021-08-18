import { connection } from "../connection";

export const checkUser = async (id:string): Promise<any> => {
   await connection('aula58_user').select("*").where({id})
}