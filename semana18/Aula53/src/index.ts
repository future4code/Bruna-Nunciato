import { app } from "./app";

//Exercício 1
class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;
  
    constructor(
          id: string,
          email: string,
          name: string,
          password: string
      ){
          console.log("Chamando o construtor da classe User")
          this.id = id
          this.email = email
          this.name = name 
          this.password = password
      }
  
      public getId(): string {
          return this.id
      }
  
      public getEmail(): string {
          return this.email
      }
  
      public getName(): string {
          return this.name
      }
      
      public introduceYourself(): string {
        return `Olá, sou ${this.name}. Bom dia!`;
      }

  }


const novaBruna = new User("8","bru@gmail.com", "Bruna", "12345678");


  console.log(novaBruna.getId())
  console.log(novaBruna.getName())
  console.log(novaBruna.getEmail())

  //Exercicio 2

class Customer extends User {
  public purchaseTotal: number = 0;
  private creditCard: string;

  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    creditCard: string
  ) {
    super(id, email, name, password);
    console.log("Chamando o construtor da classe Customer");
    this.creditCard = creditCard;
  }

  public getCreditCard(): string {
    return this.creditCard;
  }
}
const novoCliente = new Customer("1", "clientinho@gmail.com", "Cliente Sobrenome", "12341234", "visa")

  //Exercicio 3

  console.log(novoCliente.getId())
  console.log(novoCliente.getName())
  console.log(novoCliente.getEmail())
  console.log(novoCliente.getCreditCard())

  //Exercicio 4

  novoCliente.introduceYourself()

// Exercicio 5

console.log(novoCliente.introduceYourself())

// 