import { user } from '../types'

export class User{
    public id: string;
    public name: string;
    public email: string;
    public age: number;


    constructor(
        id: string, name: string, email: string, age: number)
        {
        console.log("Chamando o construtor da classe UserAccount")
        this.id = id,
        this.name = name,
        this.email = email,
        this.age = age
    }
    public getEmail(): string {
        return this.email;
      }
    public getAge(): number {
        return this.age;
      }
       
    
}

