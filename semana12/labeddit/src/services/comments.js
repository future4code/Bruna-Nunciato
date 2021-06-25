import axios from 'axios'
import {BASE_URL} from '../constants/urls'

export const postVote = (url, vote)=>{
console.log(`url e vote${url} e ${vote}`)
    axios.post(url, {
      body: Number(vote)
      }, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    })
    .then((res)=>{
        console.log(`resgistrou`,res.data)
        alert(`voto registrado`)
    })
    .catch((erro)=>{
        alert(erro.response.data.message)
    })
}


export const changeVote = (url, vote)=>{
  console.log(`url e vote${url} e ${vote}`)
  axios.put(url, {
    body: Number(vote)
    }, {
    headers: {
      Authorization: localStorage.getItem("token")
    }
  })
  .then((res)=>{
      console.log(`resgistrou`,res.data)
      alert(`voto registrado`)
  })
  .catch((erro)=>{
     alert(erro.response.data.message)
  })
}


export const deleteVote = (url)=>{
  console.log(`url e vote${url}`)
  axios.delete(url, {
    headers: {
      Authorization: localStorage.getItem("token")
    }
  })
  .then((res)=>{
      console.log(`resgistrou`,res.data)
      alert(`voto registrado`)
  })
  .catch((erro)=>{
      alert(erro.response.data.message)
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