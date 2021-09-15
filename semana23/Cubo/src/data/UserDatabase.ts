import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {

  private static TABLE_NAME = "Cubo_Users";

  public async checkParticipation ( 
    ) : Promise<any>{
      try {
        const result = await this.getConnection().raw(`
        SELECT SUM(participation) AS total FROM Cubo_Users
        `)
      return result[0][0].total
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }      
    }
  
  public async createUser(
    firstName: string,
    lastName: string,
    participation: number,
  ): Promise<void> {
    try {
      await this.getConnection()
        .insert({
          firstName,
          lastName,
          participation
        })
        .into(UserDatabase.TABLE_NAME);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async data(): Promise<any>{
    try{
      const result = await this.getConnection()
      .select('*')
      .from (UserDatabase.TABLE_NAME)
      return result
    }catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  } 
  public async delData():Promise<void>{
    try{
      await this.getConnection().raw(`
      TRUNCATE TABLE Cubo_Users`)
    }catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
 

}
