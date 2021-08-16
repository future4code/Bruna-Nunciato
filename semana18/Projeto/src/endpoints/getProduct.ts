import { Request, Response } from "express"
import  ProductDatabase  from "../data/ProductDatabase"

export async function getProduct(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const name = (req.query.name || "%") as string
      const sort = req.query.sort === "name" ? "name" : "id"
      const order = req.query.order === "DESC" ? "DESC" : "ASC"
      const page = Number(req.query.page) || 1
      const size = Number(req.query.size) || 10
   
      const offset:number = size * (page - 1)
      
      const p = new ProductDatabase();

      const products = await p.getProduct(name, sort, order, size, offset);

      res.status(200).send(products)

   } catch (error) {
      res.status(500).send("Erro Servidor interno")
   }
}
