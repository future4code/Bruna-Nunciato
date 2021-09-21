import { UserInputDTO } from "../model/User";
import { UserDatabase } from "../data/UserDatabase";


export class UserBusiness {
    constructor(
        private userDatabase: UserDatabase
      ){   
      }

    async createUser(user: UserInputDTO) {        
              
        const total = await this.userDatabase.checkParticipation()
        if (total >=100){
            throw new Error(`Participação não aceita, total deve atingir no máximo 100%, no momento já temos ${total} %` )
        }
        if( total + user.participation <=100){
            await this.userDatabase.createUser( user.firstName, user.lastName, user.participation);  
        }
        if(total + user.participation>100){
            throw new Error(`Participação não aceita, total deve atingir no máximo 100%, no momento já temos ${total} %` )
        }
      return total +user.participation
    }

    async getAllData (){

        const data = this.userDatabase.data()
        return data
    }
    async delTable (){

        await this.userDatabase.delData()
    }
   
}