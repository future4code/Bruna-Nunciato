import connection from '../connection'

const userTableName = "aula55_user";


const getUserById= async (id: string): Promise<any> => {
    const result = await connection
      .select("*")
      .from(userTableName)
      .where({ id });

    return result[0];
  }

export default getUserById