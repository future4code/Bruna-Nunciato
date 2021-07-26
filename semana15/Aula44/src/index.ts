import {app} from './app'
import { Request, Response } from "express"
import {getAllUsers} from '../src/endpoints/getAllUsers'
import {getUsersByType} from '../src/endpoints/getUsersByType'
import {getUserByName} from '../src/endpoints/getUserByName'
import {postUser} from '../src/endpoints/postUser'


app.get('/users', getAllUsers)
app.get('/user/:type', getUsersByType)
app.get('/user', getUserByName)
app.post('/user', postUser)
app.get("/ping", (req: Request, res: Response) => {
    res.status(200).send("pong!")
  })
  
  app.listen(3003, () => {
    console.log('Server is running at port 3003')
  })

  // 1.  a) metodo GET 
  // b) entidade "/users"
  // 2.  a)  params type no path e no postman "/user/:type"
  //     b) tipando  type
  // 3.  a) query params 
  //     b) o metodo put é usado para atualizar os dados, teriamos que encontrar e depois atualizar