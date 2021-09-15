export class User{
    constructor(
    private id: string,
    private firstName: string,
    private lastName: string,
    private participation: number
    ){}

    getId(){
        return this.id;
    }

    getName(){
        return this.firstName
    }

    getEmail(){
        return this.lastName;
    }

    getPassword(){
        return this.participation;
    }

    setId(id: string){
        this.id = id;
    }

}

export interface UserInputDTO{
    firstName: string;
    lastName: string;
    participation: number
}

