class Product {
    public id: string;
    public name: string;
    private description: string;
    private price: number;
  
    constructor(
        id: string,
        name: string,
        description: string,
        price: number,
    ) {
       console.log("Chamando o construtor da classe Product")
       this.id = id
       this.name = name;
       this.description= description;
       this.price = price;
    }
    public getDescription(): string {
        return this.name;
      }
    public getPrice(): number {
        return this.price;
      }
  
  }