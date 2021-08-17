export enum USER_ROLES {
   NORMAL = 'NORMAL',
   ADMIN = 'ADMIN'
}

export type authenticationData = {
   id: string,
   role: USER_ROLES
}

export type userDataDTO = {
   name: string,
   nickname: string,
   email: string,
   password: string,
   role: USER_ROLES
}

export type inputLoginDTO = {
  email: string,
  password: string
}

export type user = userDataDTO & { id: string }
