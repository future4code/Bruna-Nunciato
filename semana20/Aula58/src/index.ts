import { app } from "./app"
import { getAllController } from "./controller/user/getAllController"
import { deleteUserController } from "./controller/deleteUserController"
import { loginController } from "./controller/user/loginController"
import { signupController } from "./controller/user/signupController"

app.post('/user/signup', signupController)
app.post('/user/login', loginController)
app.delete('/user/:id', deleteUserController)
app.get('/users', getAllController)