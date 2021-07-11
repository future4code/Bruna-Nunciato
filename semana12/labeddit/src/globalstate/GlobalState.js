import React, { useState,useEffect } from 'react'
import axios from 'axios' 
import { GlobalStateContext } from './GlobalStateContext'
import { BASE_URL} from '../constants/urls'
import { useHistory } from 'react-router-dom'

const GlobalState = (props) => {
const [posts,setPosts] = useState([{}])
const [page,setPage] = useState(0)
const history = useHistory()

const headers = {headers: {Authorization:localStorage.getItem("token")}}

const getPost = () => {
    if(headers.headers.Authorization){
        axios
        .get(`${BASE_URL}/posts?page=${page}`,headers)
        .then((response) => {
            setPosts(response.data)
        })
        .catch((err) => {
            if(err.response.status === 401 && localStorage.getItem("token")){
                localStorage.removeItem("token")
                history.push("/login")
            }
                alert(err.response.data)
        })
    }
}
useEffect(() => {
    // setVoted(false)
    getPost()
}, [page])


return (
    <GlobalStateContext.Provider value = {{posts,getPost,setPage}}>
        {props.children}
    </GlobalStateContext.Provider>
)
}

export default GlobalState