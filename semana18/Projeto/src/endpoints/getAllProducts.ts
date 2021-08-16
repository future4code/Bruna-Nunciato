import { Request, Response } from "express"
import { product, productModel } from "../types"
import  ProductDatabase  from "../data/ProductDatabase"

export async function getAllProducts(
   req: Request,
   res: Response
): Promise<void> {
   try {
     
      const p = new ProductDatabase();
      const products = await p.getAllProducts();
      const productsList = products.map(productModel)
      res.status(200).send(productsList)

   } catch (error) {
      res.status(500).send("erro servidor interno")
   }
}
