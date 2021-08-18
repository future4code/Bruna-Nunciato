export type taskDataDTO = {
   title: string,
   description: string,
   deadline: string,
   authorId: string
}

export type task = taskDataDTO & { id: string }

export type taskOpenDTO = {
   id: string,
   title: string,
   description: string,
   deadline: string,
   status: string,
   authorId: string,
}

export type taskAndUserDTO = {
   id: string,
   name: string,
   nickname: string,
   email: string,
   title: string,
   description: string,
   deadline: string,
   status: string,
   authorId: string 
}