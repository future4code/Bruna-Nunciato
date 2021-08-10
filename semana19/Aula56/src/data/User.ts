import connection from '../connection'

const userTableName = "aula55_user";

export class User {

createUser = async (id: string, email: string, role:string, password: string): Promise<void> => {
  await connection
      .insert({
        id,
        email,
        role,
        password
      })
      .into(userTableName);
  }

  getUserByEmail = async(email: string): Promise<any> => {
    const result = await connection
      .select("*")
      .from(userTableName)
      .where({ email });
 
    return result[0];
   }
   
   getUserById= async (id: string): Promise<any> => {
    const result = await connection
      .select("*")
      .from(userTableName)
      .where({ id });

    return result[0];
  }


}

