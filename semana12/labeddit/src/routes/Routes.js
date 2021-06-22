import React from "react"
import { Switch, Route } from "react-router-dom"
import SignUpPage from "../pages/SignUpPage/SignUpPage"
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import LoginPage from "../pages/LoginPage/LoginPage"
import PostsPage from '../pages/PostsPage/PostsPage'
import PostDetailPage from '../pages/PostsDetailPage/PostsDetailPage'
import { BrowserRouter } from 'react-router-dom'

const Routes = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/login">
                <LoginPage />
            </Route>
            <Route exact path="/cadastro">
                <SignUpPage />
            </Route>
            <Route exact path="/">
                <PostsPage />
            </Route>
            <Route exact path="detalhes-post/:id">
                <PostDetailPage />
            </Route>
            <Route>
                <ErrorPage />
            </Route>
             </Switch>
       </BrowserRouter>
    )
}

export default Routes