export type user = {
   id: string
   name: string
   email: string
   age: number
}
export const userModel = (input: any): user => {
   return {
      id: input.id,
      name: input.name,
      email: input.email,
      age: input.age
   }
}

export type product = {
   id: string
   name: string
   description: string
   price: number
}

export const productModel = (input: any): product => {
   return {
      id: input.id,
      name: input.name,
      description: input.description,
      price: input.price
   }
}

export type ticket = {
   id: string
   name: string
   description: string
   price: number
   leaving: string
   going: string
}
export const ticketModel = (input: any): ticket => {
   return {
      id: input.id,
      name: input.name,
      description: input.description,
      price: input.price,
      leaving: input.leaving,
      going: input.going
   }
}