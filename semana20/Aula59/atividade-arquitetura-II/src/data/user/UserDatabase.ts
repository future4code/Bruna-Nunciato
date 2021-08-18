import { user } from "../../model/user";
import { BaseDatabase } from "../BaseDatabase";

export class UserDatabase extends BaseDatabase{

    private static TABLE_USERS = "to_do_list_users"
  
    async create({
      id,
      name,
      nickname,
      email,
      password, 
      role
    }: user) {
      await this.getConnection().insert({
        id,
        name,
        nickname,
        email,
        password,
        role
      }).into(UserDatabase.TABLE_USERS)
    }
  
    async selectByEmail( email : string) {
      const result = await this.getConnection()
        .select("*")
        .from(UserDatabase.TABLE_USERS)
        .where({ email} )
       return result[0]
  
    }

}