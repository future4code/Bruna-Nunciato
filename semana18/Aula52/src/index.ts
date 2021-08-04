//1) a. constructor , denomina o que será recebido pela classe dos objetos
// b. Duas vezes
// c. declarando uma função publica chamando a propriedade. No caso explicitando que a propriedade é publica

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }
    public getCpf():string {
        return this.cpf
    }

    public setAge(age: number) {
        if (age >= 18) {
          this.age = age;
          console.log(`idade${age} ok`)
        } else {
          throw new Error("Idade deve ser maior que 18 anos");
        }
      }

      public setCpf(cpf: string) {
        if (cpf.length === 14 && cpf.includes("." && "-")) {
          this.cpf = cpf;
          console.log(`cpf ${cpf} ok`)
        } else {
          throw new Error("CPF deve ter 14 caracteres, inclua - .");
        }
      }
  }

   const  usuario = new UserAccount("123.123.123-11", "Bruna", 18)

  //Exercicio 2

  class Transaction {
    private date: string;
    private value: number;
    private description: string;

    public getDate=() =>{
        return this.date
    }

    public getValue=(value:number) =>{
      if(!isNaN(value)){
        throw new Error('value precisa ser um numero valido.')
      } else {
        return this.value
      }
    }
     public getDescription=() =>{
      return this.description
  }

  public setDescription=(descripton:string) =>{
    return this.description
}
public setValue=(value:number) =>{
  return this.value
}

    constructor(date: string, value: number, description: string) {
      this.date = date;
      this.value = value;
      this.description = description
    }
  }

//Exercicio 3

  class Bank {
     
    private accounts: UserAccount[];

    public addUser(cpf:string, name: string, age: number) {
        const user = new UserAccount(cpf,name,age);
        this.accounts.push(user);
      }
  
    constructor(accounts: UserAccount[]) {
      this.accounts = accounts;
    }
    public getAccount():UserAccount[] {
        return this.accounts
    }
    
    public setAccount():UserAccount[] {
        return this.accounts
    }
  }

const Thiago = new UserAccount("124.145.167-09", "Thiago", 20)
console.log(Thiago)

console.log(Thiago.getCpf())
console.log(Thiago.setAge(36))
console.log(Thiago.setCpf("111.1111-11"))