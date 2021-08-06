export class Product {
    public id: number;
    public name: string;
    private description: string;
    private price: number;
  
    constructor(
        id: number,
        name: string,
        description: string,
        price: number,
    ) {
      
       this.id = id
       this.name = name;
       this.description = description;
       this.price = price;
    }
    public getDescription(): string {
        return this.name;
      }
    public getPrice(): number {
        return this.price;
      }
  
  }