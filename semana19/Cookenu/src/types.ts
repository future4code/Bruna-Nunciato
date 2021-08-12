export type user = {
   id: string
   name: string
   email: string
 }

export interface AuthenticationData {
   id: string
}

export type recipe = {
   id_user: string   
   id: string
   author: string
   title: string
   description: string
}