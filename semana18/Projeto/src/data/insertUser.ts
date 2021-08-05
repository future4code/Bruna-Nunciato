import { BaseDatabase } from "./BaseDatabase";
import { user } from '../types';


export class insertUser extends BaseDatabase {
 public addUser = async (user: user) : Promise<void> => {
    await BaseDatabase.connection("labECommerce_user")
    .insert(user)
}
}
