import { Request, Response } from "express";
import { TaskBusiness } from "../../business/task/taskBusiness";
import { TaskDatabase } from "../../data/task/TaskDataBase";
import { taskAndUserDTO, taskDataDTO } from "../../model/task";

export class TaskController {

    createTask = async (
        req: Request,
        res: Response
     ) => {
        try {
     
           const { title, description, deadline, authorId} = req.body
                    
           const taskData: taskDataDTO = { title, description, deadline, authorId } 
           const taskBusiness = new TaskBusiness
           await taskBusiness.createTaskBusiness( taskData)
     
           res.status(201).send({message:"ok"}).end()
     
        } catch (error:any) {
     
           res.statusMessage = error.message
           res.status(500).end()
        }
    }

getTaskById = async (
   req: Request,
   res: Response
) => {
   try {

      const { id } = req.params

          const taskBusines = new TaskBusiness()

      const task= await taskBusines.getTaskByIdBusiness(id)

      res.status(200).send(task)

   } catch (error:any) {
      res.status(400).send(error.message)
   }
}


}