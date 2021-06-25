import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../constants/urls'

export const RequestComments =(initialData,id)=>{
    const [comments, setComments] = useState(initialData)
    
    useEffect(() => {
    axios.get(`${BASE_URL}/posts/${id}/comments`, {headers: {
        Authorization: localStorage.getItem('token')}
      })
    .then((res)=>{
        setComments(res.data)
    })
    .catch((erro)=>{
        alert(erro.response.data.message)
    })
    },[id])

    return (comments)
}
