import { Request, Response } from "express"
import { product } from "../types"
import  ProductDatabase  from "../data/ProductDatabase"

export async function getAllProducts(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const name = (req.query.name || "%") as string
      const sort = req.query.sort === "title" ? "title" : "created_at"
      const order = req.query.order === "DESC" ? "DESC" : "ASC"
      const page = Number(req.query.page) || 1
      const size = Number(req.query.size) || 10

   
      const offset:number = size * (page - 1)
      
      const user = new ProductDatabase();
      //const recipes = await new RecipeDatabase().getRecipes(..parametros)
      const recipes = await user.getProduct(name, sort, order, size, offset);

      res.status(200).send(recipes)

   } catch (error) {
      res.status(500).send("Internal server error")
   }
}
