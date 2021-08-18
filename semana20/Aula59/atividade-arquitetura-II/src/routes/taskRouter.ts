import express from 'express'
import { TaskController } from '../controller/task/TaskController'

export const taskRouter = express.Router()

const taskController = new TaskController()

taskRouter.put("", taskController.createTask)
taskRouter.get("/:id", taskController.getTaskById)
