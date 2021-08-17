import { Request, Response } from "express";
import { TaskBusiness } from "../../business/task/taskBusiness";
import { TaskBaseDatabase } from "../../data/task/TaskDataBase";

export class TaskController {

    createTask = async (
        req: Request,
        res: Response
     ) => {
        try {
     
           const { title, description, deadline, authorId } = req.body
                
           const taskBusiness = new TaskBusiness
           await taskBusiness.createTaskBusiness({
              title, description, deadline, authorId
           })
     
           res.status(201).end()
     
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

      const taskBaseDatabase = new TaskBaseDatabase()

      const task = await taskBaseDatabase.getTaskByIdBusiness(id)

      res.status(200).send(task)

   } catch (error:any) {
      res.status(400).send(error.message)
   }
}


}