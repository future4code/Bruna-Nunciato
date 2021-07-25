import app from "./app";
import { editUserById } from "./endpoints/editUserById";
import { getTaskById } from "./endpoints/getTaskById";
import { getUserById } from "./endpoints/getUserById";
import { postTask } from "./endpoints/postTask";
import { postUser } from "./endpoints/postUser";

app.post("/user", postUser )

app.get("/user/:id", getUserById)

app.put("/user/edit/:id", editUserById)

app.post("/task", postTask)

app.get("/task/:id", getTaskById)
  