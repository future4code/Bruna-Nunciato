export enum USER_ROLES {
   NORMAL = 'NORMAL',
   ADMIN = 'ADMIN'
}

export type authenticationData = {
   id: string,
   role: USER_ROLES
}

export type userData = {
   name: string,
   nickname: string,
   email: string,
   password: string,
   role: USER_ROLES
}

export type user = userData & { id: string }

export class User {
   constructor(
      private id: string,
      private name: string,
      private email: string,
      private password: string,
      private role: USER_ROLES
   ) { }
   
   getId() {
     return this.id
   }
 
   getName() {
     return this.name
   }
 
   getEmail() {
     return this.email
   }
 
   getPassword() {
     return this.password
   }
 
   setId(newId: string) {
     this.id = newId
   }
 
   setName(newName: string) {
     this.name = newName
   }
 
   setEmail(newEmail: string) {
     this.email = newEmail
   }
 
   setPassword(newPassword: string) {
     this.password = newPassword
   }
   getRole(){
      return this.role
   }
 }
 