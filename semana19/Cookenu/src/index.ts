import app from "./app"
import signup from './endpoints/signup'
import login from "./endpoints/login"
import profile from './endpoints/profile'
import getProfileById from "./endpoints/getProfileById"
import postRecipe from "./endpoints/postRecipe"
import getRecipeById from "./endpoints/getRecipeById"
import tofollow from "./endpoints/toFollow"
import following from "./endpoints/following"
import feedRecipes from "./endpoints/feedRecipes"
import unfollow from "./endpoints/unfollow"

app.post("/user/signup", signup) 
app.post("/user/login", login)
app.get("/user/profile", profile)
app.get("/user/:id", getProfileById)
app.post("/recipe/add", postRecipe)
app.get("/recipe/:id", getRecipeById)
app.post("/user/follow", tofollow)
app.get("/recipe", feedRecipes)
app.get("/following", following)
app.delete("/user/unfollow", unfollow)