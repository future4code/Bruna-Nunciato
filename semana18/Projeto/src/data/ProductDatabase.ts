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
        //com atributos estaticos, morre o this. Usamos
        //o nome da classe toda
        const result = await BaseDatabase.connection("labECommerce_product")
         .where("name", "LIKE", `%${name}%`)
         .orderBy(sort, order)
         .limit(size)
         .offset(offset)
   
         const product = result.map(productModel)

      return productModel;
    }

}