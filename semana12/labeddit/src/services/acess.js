import axios from 'axios'
import {BASE_URL} from '../constants/urls'

export const signUp = (body)=>{

    axios.post(`${BASE_URL}/users/signup, body`)
    .then((res)=>{
        console.log(res)
        localStorage.setItem("token", res.data.token)
    })
    .catch((erro)=>{
        console.log(erro.response.message)
    })

}

export const login = (body)=>{

    axios.post(`${BASE_URL}/users/login, body`)
    .then((res)=>{
        console.log(res)
        localStorage.setItem("token", res.data.token)
    })
    .catch((erro)=>{
        console.log(erro.response.message)
    })
}