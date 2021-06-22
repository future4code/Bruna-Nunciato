// import React from "react"
// import { Switch, Route } from "react-router-dom"
// import SignUpPage from "../pages/SignUpPage/SignUpPage"
// import ErrorPage from '../pages/ErrorPage/ErrorPage'
// import LoginPage from "../pages/LoginPage/LoginPage"
// import PostsPage from '../pages/PostsPage/PostsPage'
// import PostDetailPage from '../pages/PostsDetailPage/PostsDetailPage'

// const Router = ({setRightButtonText}) => {
//     return (
//         <Switch>
//             <Route exact path="/login">
//                 <LoginPage setRightButtonText={setRightButtonText}/>
//             </Route>
//             <Route exact path="/cadastro">
//                 <SignUpPage setRightButtonText={setRightButtonText} />
//             </Route>
//             <Route exact path="/">
//                 <PostsPage />
//             </Route>
//             <Route exact path="detalhes-post/:id">
//                 <PostDetailPage />
//             </Route>
//             <Route>
//                 <ErrorPage />
//             </Route>
//         </Switch>
//     )
// }

// export default Router