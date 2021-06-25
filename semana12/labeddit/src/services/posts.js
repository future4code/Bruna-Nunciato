import axios from 'axios'
import {BASE_URL} from '../constants/urls'

export const createPost = (form, clear, setIsLoading) => {
    console.log(form)
    setIsLoading(true)
      axios.post(`${BASE_URL}/posts/`, {
        title: form.title,  
        body: form.body
      }, {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      })
        .then((res) => {
          alert("Postagem efetuada!")
          clear()
          setIsLoading(false)
        })
        .catch((err) => {
          alert(err.response.data.message)
          setIsLoading(false)
        })
    }
  