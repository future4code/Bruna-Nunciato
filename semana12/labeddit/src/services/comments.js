import axios from 'axios'
import {BASE_URL} from '../constants/urls'

// export const postVote = (body,id)=>{

//     axios.post(`${BASE_URL}/${id}/votes`, body)
//     .then((res)=>{
//         console.log(`resgistrou`,res.data)
//     })
//     .catch((erro)=>{
//         console.log(erro.response.data.message)
//     })
// }


export const comment = (form, id, clear, setIsLoading) => {
  setIsLoading(true)
    axios.post(`${BASE_URL}/posts/${id}/comments`, {
        body: form.body
    }, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    })
      .then((res) => {
        alert(res.data)
        clear()
        setIsLoading(false)
      })
      .catch((err) => {
        alert(err.response.data.message)
        setIsLoading(false)
      })
  }

  export const delComment = (id) =>{
    if (window.confirm("Deseja deletar este comentário?")) {
        axios
          .delete(`${BASE_URL}/comments/${id}/votes`, {
            headers: {
              Authorization: localStorage.getItem("token")
          }})
          .then((res) => {
            alert("Comentário deletado !");
            })
          .catch((erro) => {
            alert(erro.response.data.message);
          });
      }
  }