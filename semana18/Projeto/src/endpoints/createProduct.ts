import { Request, Response } from "express";
import { Product } from "../classes/Product";
import ProductDatabase from "../data/ProductDatabase";


export default async function createProduct(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { name, description, price } = req.body

      if ( !name || !description || !price ) {
         res.statusCode = 422
         throw " 'nome', 'descrição' e 'preço' são obrigatórios"
      }
      const id: number = Math.round(((new Date()).getTime() & 0xffff))

    const newProduct: Product = new  Product(id,name, description,price)
    await new ProductDatabase().AddProduct(newProduct)

      res.status(201).send("Novo produto inserido")

   } catch (error:any) {

      if (typeof error === "string") {

         res.send(error)
      } else {

         console.log(error.sqlMessage || error.message);
         res.status(500).send("Ops! Um erro inesperado ocorreu =/")
      }
   }
}