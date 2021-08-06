import { app } from "./app";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getAllProducts } from "./endpoints/getAllProducts";
import { getProduct } from "./endpoints/getProduct";
import createUser from "./endpoints/createUser";
import createProduct from "./endpoints/createProduct";

app.get("/users", getAllUsers)
app.get("/products", getAllProducts)
app.get("/product", getProduct)
app.post("/user/create", createUser)
app.post("/product/create", createProduct)