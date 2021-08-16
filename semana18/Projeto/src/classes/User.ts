import { user } from '../types'

export class User{
    public id: number;
    public name: string;
    public email: string;
    public age: number;


    constructor(
        id: number, name: string, email: string, age: number)
        {
        
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
      public getId(): number {
        return this.id;
      }
    
}

