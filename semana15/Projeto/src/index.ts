import {app} from './app'
import { Request, Response } from "express"
import {getAllUsers} from '../src/endpoints/getAllUsers'
import {postUser} from '../src/endpoints/postUser'
import {getSaldo} from '../src/endpoints/getSaldo'

app.get('/users', getAllUsers)
app.get('/saldo', getSaldo)
app.post('/user/new', postUser)
app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong!")
})
  app.listen(3003, () => {
    console.log('Server is running at port 3003')
  })
