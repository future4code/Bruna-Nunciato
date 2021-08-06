import { Product } from "../classes/Product";
import { productModel } from "../types";
import { BaseDatabase } from "./BaseDatabase";

export default class ProductDatabase extends BaseDatabase {

    constructor(){
        super()
    }

    public getProduct = async (
        name: string,
        sort: string,
        order: string,
        size: number,
        offset: number
    ) =>{

        const result = await BaseDatabase.connection("labECommerce_product")
         .where("name", "LIKE", `%${name}%`)
         .orderBy(sort, order)
         .limit(size)
         .offset(offset)
   
         const product = result.map(productModel)

      return productModel;
    }

    public AddProduct = async ( product: Product ) => {
        await BaseDatabase.connection("labECommerce_product")
        .insert ( product )
    }
      public getAllProducts = async (order?: string): Promise<Product[]> => {
          const result = await BaseDatabase.connection("labECommerce_product")
          .select("*")
          .orderBy("id",`${order}`)
          return result
       }
       public getProductById = async (id:number): Promise<Product[]> =>{
           const result = await BaseDatabase.connection("labECommerce_product")
           .select("*")
           .where ("id", "=", `${id}`)
           return result
       }
    }

