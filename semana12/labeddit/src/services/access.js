import axios from 'axios'
import {BASE_URL} from '../constants/urls'
import { goToPosts } from '../routes/coordinator'

export const signUp = (body, clear, history, setRightButtonText, setIsLoading)=>{

    axios.post(`${BASE_URL}/users/signup`, body)
    .then((res)=>{
        console.log(res)
        localStorage.setItem("token", res.data.token)
        clear()
        setIsLoading(false)
        goToPosts(history)
        setRightButtonText("Logout")
    })
    .catch((erro)=>{
        console.log(erro.response.data.message)
    })
}

export const login = (body, clear, history, setRightButtonText, setIsLoading)=>{

    axios.post(`${BASE_URL}/users/login`, body)
    .then((res)=>{
        console.log(res)
        localStorage.setItem("token", res.data.token)
        clear()
        setIsLoading(false)
        goToPosts(history)
        setRightButtonText("Logout")
    })
    .catch((erro)=>{
        console.log(erro.response.message)
        alert(erro.message)
    })
}