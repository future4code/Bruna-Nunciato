import app from "./app"
import signup from './endpoints/signup'
import login from "./endpoints/login"
import profile from './endpoints/profile'
import getProfileById from "./endpoints/getProfileById"
import postRecipe from "./endpoints/postRecipe"
import getFeed from "./endpoints/getFeed"
import getRecipeById from "./endpoints/getRecipeById"

app.post("/user/signup", signup) 
app.post("/user/login", login)
app.get("/user/profile", profile)
app.get("/user/:id", getProfileById)
app.post("/recipe/add", postRecipe)
app.get("/recipe", getFeed)
app.get("/recipe/:id", getRecipeById)