import { BaseDatabase } from "../BaseDatabase";
import { task } from '../../model/task'

export class TaskBaseDatabase extends BaseDatabase {
    getTaskByIdBusiness(id: string) {
       throw new Error("Method not implemented.");
    }

    private static TABLE_TASK = 'to_do_list_tasks'
    private static TABLE_USERS = "to_do_list_users"

    insertTask = async (
        task: task
     ) => {
        await this.getConnection()('TABLE_TASK')
           .insert({
              id: task.id,
              title: task.title,
              description: task.description,
              deadline: task.deadline,
              author_id: task.authorId
           })
        }

    selectTaskById = async (
        id: string
     ): Promise<any> => {
          const result = await this.getConnection().raw(`
             SELECT tasks.*, nickname FROM to_do_list_tasks AS tasks
             JOIN to_do_list_users AS users
             ON author_id = users.id
             WHERE tasks.id = '${id}';
            `)
         
            return result[0][0]
         
}
}