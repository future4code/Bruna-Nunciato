import connection from '../connection'

const userTableName = "aula55_user";


const getUserByEmail = async(email: string): Promise<any> => {
    const result = await connection
      .select("*")
      .from(userTableName)
      .where({ email });
 
    return result[0];
   }
 
 export default getUserByEmail