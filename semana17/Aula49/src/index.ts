import { app } from "./app";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getUsersByPage } from "./endpoints/getUsersByPage";
import { getUsersByAsc } from "./endpoints/getUsersByAsc";
import { getUsersByType } from "./endpoints/getUsersByType";
import { getUsersWithAll } from "./endpoints/getUsersWithAll";
import { getUserByName } from "./endpoints/getUserByName";

// app.get("/users", getAllUsers)
// app.get("/users", getUserByName)
// app.get("/users", getUsersByAsc)  
// app.get("/users", getUsersByPage) 
// app.get("/users/:type", getUsersByType)
app.get("/users", getUsersWithAll)


