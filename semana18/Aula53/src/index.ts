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

// POLIMORFISMO

// Exercicio 1

export interface Client {
    name: string;
    registrationNumber: number;
    consumedEnergy: number;
    calculateBill(): number;
  }



const client: Client = {
    name: "Goli",
    registrationNumber: 1,
    consumedEnergy: 100,
  
    calculateBill: () => {
      return 2;
    }
       
  }
console.log(client)


//Exercicio 2

export abstract class Place {
    constructor(protected cep: string) {}
  
      public getCep(): string {
          return this.cep;
    }
  }
//   const novoLugar = new Place("123280-000")

//Exercicio 3

export class Residence extends Place {
    constructor(
      protected residentsQuantity: number,
      // Refere-se ao número de moradores da casa
  
      cep: string
    ) {
      super(cep);
    }
    public getDwellersQuantity(): number {
        return this.residentsQuantity
      }
  }

  export class Commerce extends Place {
    constructor(
      protected floorsQuantity: number,
      // Refere-se à quantidade de andares do lugar
  
      cep: string
    ) {
      super(cep);
    }
    public getFloorsQuantity(): number {
        return this.floorsQuantity;
      }
  }

  export class Industry extends Place {
    constructor(
      protected machinesQuantity: number, 
      // Refere-se à quantidade de máquinas do local 
      
      cep: string
          ) {
          super(cep);
    }
    public getMachinesQuantity(): number {
        return this.machinesQuantity;
      }
  }

  const residencia = new Residence(2, "12304-909")
  const comercio = new Commerce(4, "25304-111")
  const industria = new Industry(1, "450100-200")

  console.log(residencia.getCep())
  console.log(comercio.getCep())
  console.log(industria.getCep())

  //Exercicio 4

  class ResidentialClient extends Residence implements Client {
    constructor(
      public name: string,
      public registrationNumber: number,
      public consumedEnergy: number,
      private cpf: string,
      residentsQuantity: number,
      cep: string
    ) {
      super(residentsQuantity, cep);
    }
  
    public getCpf(): string {
      return this.cpf;
    }
  
    public calculateBill(): number {
      return this.consumedEnergy * 0.75;
    }
  }

  //Exercicio 5

  class CommercialClient extends Commerce implements Client {
    constructor(
      public name: string,
      public registrationNumber: number,
      public consumedEnergy: number,
      private cnpj: string,
      floorsQuantity: number,
      cep: string
    ) {
      super(floorsQuantity, cep);
    }
  
    public calculateBill(): number {
      return this.consumedEnergy * 0.53;
    }
  
    public getCnpj(): string {
      return this.cnpj;
    }

    public getName(): string {
        return this.name;
      }
  }

  //Exercicio 6

  class IndustrialClient extends Industry implements Client {
    constructor(
      public name: string,
      public registrationNumber: number,
      public consumedEnergy: number,
      private insdustryNumber: string, // tanto faz ser string ou number
      machinesQuantity: number,
      cep: string
    ) {
      super(machinesQuantity, cep);
    }
  
    public getIndustryNumber(): string {
      return this.insdustryNumber;
    }
  
    public calculateBill(): number {
      return this.consumedEnergy * 0.45 + this.machinesQuantity * 100;
    }
  }