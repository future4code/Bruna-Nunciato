import { connection } from "../connection";

export const getAll = async (): Promise<any> => {
    const result = await connection('aula58_user').select("*")
   return result
}