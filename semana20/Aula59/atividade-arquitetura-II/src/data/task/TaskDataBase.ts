import { BaseDatabase } from "../BaseDatabase";
import { task, taskAndUserDTO } from '../../model/task'

export class TaskDatabase extends BaseDatabase {
   

    private static TABLE_TASK = 'to_do_list_tasks'
    private static TABLE_USERS = "to_do_list_users"

    insertTask = async (
        task: task
     ) => {
        await this.getConnection()
       
           .insert({
              id: task.id,
              title: task.title,
              description: task.description,
              deadline: task.deadline,
              authorId: task.authorId
           }) 
           .into(TaskDatabase.TABLE_TASK)
        }

    selectTaskById = async (
        id: string
     ): Promise<any> => {
      const result = await this.getConnection()
      .select("*")
      .from ("to_do_list_users")
       .where("to_do_list_tasks.authorId", "=", id)
      .join("to_do_list_tasks","authorId","=", "to_do_list_users.id")

            return result
     }
}