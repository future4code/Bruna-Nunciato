import { Product } from "./Product"

interface quantity_purchase {
     quantity: number;
}



class Purchase extends Product implements quantity_purchase{
    public quantity: number = 1
  
    constructor(
        id: number,
        name: string,
        description: string,
        price: number,
     ) {
       super(id, name, description, price)
    }
  
    getTotal(price:number, quantity:number): number {
        const total = price * quantity
        return total
      }
   
  }