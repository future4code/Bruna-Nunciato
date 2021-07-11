import axios from 'axios'
import {BASE_URL} from '../constants/urls'
import { goToPosts } from '../routes/coordinator'

export const signUp = (body, clear, history, setRightButtonText, setIsLoading)=>{

    axios.post(`${BASE_URL}/users/signup`, body)
    .then((res)=>{
       localStorage.setItem("token", res.data.token)
        clear()
        setIsLoading(false)
        goToPosts(history)
        setRightButtonText("Logout")
    })
    .catch((erro)=>{
        alert(erro.response.data)
    })
}

export const login = (body, clear, history, setRightButtonText, setIsLoading)=>{

    axios.post(`${BASE_URL}/users/login`, body)
    .then((res)=>{
        localStorage.setItem("token", res.data.token)
        clear()
        setIsLoading(false)
        goToPosts(history)
        setRightButtonText("Logout")
    })
    .catch((erro)=>{
        alert(erro.response.data)
    })
}