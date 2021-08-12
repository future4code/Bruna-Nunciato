import connection from '../connection'
import { user } from '../types'

const recipeTable = "cookenu_recipe"
// const joinTable = "cookenu_follower"
const userTable = "cookenu_user"

export class RecipeData {

createRecipe = async (id: string, id_user: string, author: string, title: string, description: string, createdAt: string): Promise<void> => {
  await connection
      .insert({
        id,
        id_user,
        author,
        title,
        description,
        createdAt
      })
      .into(recipeTable);
      console.log(id,id_user,author,title,)
  }

getRecipeByTitle = async(title: string): Promise<any> => {
     const result = await connection
      .select("*")
      .from(recipeTable)
      .where({ title });
 
    return result[0];
   }
   
getRecipeById= async (id: string): Promise<user> => {
      const result = await connection
      .select("*")
      .from(recipeTable)
      .where({ id });

      return result[0];
  }
//feed personalizado
// feedRecipes = async (id_user:string): Promise<any> => {
//       const result = await connection(joinTable)
//       .select("recipeTable.id","recipeTable.author", "recipeTable.title","recipeTable.decription")
//       .where("joinTable.id_user", "=", id_user)
//       .join("recipeTable","id_user","=", "joinTable.id_following")

//       return result
  // }
  feedRecipes = async (id_user:string): Promise<any> => {
    const result = await connection(userTable)
    .select("recipeTable.id","recipeTable.author","userTable.name", "recipeTable.title","recipeTable.decription")
    .where("userTable.id", "=", id_user)
    .join("recipeTable","id_user","=", "userTable.id")
 console.log(`deentro da função`, id_user)
    return result
  }
}
