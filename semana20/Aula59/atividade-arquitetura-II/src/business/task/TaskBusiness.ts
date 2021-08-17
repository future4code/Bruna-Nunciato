import { TaskDatabase } from "../../data/task/TaskDataBase"
import { generateId } from "../../services/idGenerator"
import { taskAndUserDTO, taskDataDTO, taskOpenDTO } from "../../model/task"

export class TaskBusiness {

    createTaskBusiness = async (
        taskData: taskDataDTO
     ) => {
     
        if (
           !taskData.title ||
           !taskData.description ||
           !taskData.deadline ||
           !taskData.authorId
        ) {
           throw new Error('"title", "description", "deadline" e "authorId" são obrigatórios')
        }
     
        const id: string = generateId()
     
        const taskBaseDatabase = new TaskDatabase()   
        await taskBaseDatabase.insertTask({
           id,
           ...taskData
        })
     }
  

     getTaskByIdBusiness = async (
        id: string
     ): Promise<taskOpenDTO>=> {
         const taskDatabase = new TaskDatabase()
        const result = await taskDatabase.selectTaskById(id)
   
        if (!result) {
           throw new Error("Tarefa não encontrada")
        }

 

        // const taskWithUserInfo = {
        //     id: result.id,
        //     title: result.title,
        //     description: result.description,
        //     deadline: result.deadline,
        //     status: result.status,
        //     authorId: result.authorId,
        //     name: result.name,
        //     nickname: result.nickname,
        //     email: result.email
        // }


     
     
        return result
     }
}