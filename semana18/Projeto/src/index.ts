import { app } from "./app";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getAllProducts } from "./endpoints/getAllProducts";
import createUser from "./endpoints/createUser";

app.get("/users", getAllUsers)
app.get("/products", getAllProducts)
app.post("/user/create", createUser)

