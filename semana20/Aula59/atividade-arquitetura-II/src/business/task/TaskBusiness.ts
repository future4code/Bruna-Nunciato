import { TaskBaseDatabase } from "../../data/task/TaskDataBase"
import { generateId } from "../../services/idGenerator"
import { taskDataDTO } from "../../model/task"

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
     
        const taskBaseDatabase = new TaskBaseDatabase()
        await taskBaseDatabase.insertTask({
           id,
           ...taskData
        })
     }

     getTaskByIdBusiness = async (
        id: string
     ) => {
         const taskBaseDatabase = new TaskBaseDatabase()
        const result = await taskBaseDatabase.selectTaskById(id)
     
        if (!result) {
           throw new Error("Tarefa não encontrada")
        }
     
        const taskWithUserInfo = {
           id: result.id,
           title: result.title,
           description: result.description,
           deadline: result.deadline,
           status: result.status,
           authorId: result.author_id,
           authorNickname: result.nickname
        }
     
        return taskWithUserInfo
     }
}