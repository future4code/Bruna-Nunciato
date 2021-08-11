import connection from '../connection'
import { user } from '../types';

const RecipeTable = "cookenu_recipe";
const joinTable = "cookenu_follower"

export class UserData {

createRecipe = async (id: string, email: string, password: string): Promise<void> => {
  await connection
      .insert({
        id,
        email,
        password
      })
      .into(RecipeTable);
  }

getUserByTitle = async(title: string): Promise<any> => {
     const result = await connection
      .select("*")
      .from(RecipeTable)
      .where({ title });
 
    return result[0];
   }
   
getUserById= async (id: string): Promise<user> => {
      const result = await connection
      .select("*")
      .from(RecipeTable)
      .where({ id });

      return result[0];
  }

feedRecipes = async (id_user:string): Promise<any> => {
      const result = await connection(joinTable)
      .select("RecipeTable.id","RecipeTable.author", "recipeTable.title","recipeTable.decription")
      .where("joinTable.id_user", "=", id_user)
      .join("recipeTable","id_user","=", "joinTable.id_following")

      return result
  }

}
