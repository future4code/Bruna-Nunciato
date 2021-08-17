export type taskDataDTO = {
   title: string,
   description: string,
   deadline: string,
   authorId: string
}

export type task = taskDataDTO & { id: string }