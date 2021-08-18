export type user = {
   id: string
   email: string
   password: string
   name?: string
   nickname?: string
   role?: 'admin' |'normal'
}

export interface AuthenticationData {
   id: string,
   role: string
}
