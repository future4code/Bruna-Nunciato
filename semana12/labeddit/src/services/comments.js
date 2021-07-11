import axios from 'axios'
import {BASE_URL} from '../constants/urls'

export const postVote = (url, vote)=>{
    axios.post(url, {
      direction: Number(vote)
      }, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    })
    .then((res)=>{
       alert(`voto registrado`)
    })
    .catch((erro)=>{
        alert(erro.response.data)
    })
}


export const changeVote = (url, vote)=>{
  axios.put(url, {
    direction: Number(vote)
    }, {
    headers: {
      Authorization: localStorage.getItem("token")
    }
  })
  .then((res)=>{
     alert(`voto registrado`)
  })
  .catch((erro)=>{
     alert(erro.response.data)
  })
}


export const deleteVote = (url)=>{
  axios.delete(url, {
    headers: {
      Authorization: localStorage.getItem("token")
    }
  })
  .then((res)=>{
      alert(`voto apagado`)
  })
  .catch((erro)=>{
      alert(erro.response.data)
  })
}


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