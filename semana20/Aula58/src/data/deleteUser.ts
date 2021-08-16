import { connection } from "../connection";

export const deleteUser = async (id:string): Promise<void> => {
   await connection('aula58_user').delete().where({id})
}