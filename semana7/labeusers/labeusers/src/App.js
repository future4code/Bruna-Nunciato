import styled from 'styled-components'
import React from 'react';
import axios from 'axios';

const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`

const CriarUsuario = styled.div`

`
const ListaDeUsuarios = styled.div`

`
const BASE = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
const headers = {
  headers:{
    Authorization: "bruna-nunciato-paiva"
  }
};

class App extends React.Component {
  state ={
    userList :[],
    inputName: "",
    inputEmail: "",
    changePage: true,
    };
  //aparecer lista de usuarios 
componentDidMount (){
  this.getAllUsers()
}


//inputs atualizando estado
  handleName = (event)=> {
    this.setState({inputName: event.target.value});
  };
  handleEmail = (event)=>{
    this.setState({inputEmail: event.target.value})
  };

  //deletar user
  deletarUser =(id)=>{
  axios 
  .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, headers)
  .then((ser)=>{
    alert("usuário deletado!");
    
  })
  .catch((erro)=>{
    alert("erro")
    console.log(erro)
  })
  this.getAllUsers()
  }



  //aparecer lista de usuarios
  getAllUsers = () => {
  axios
    .get(BASE, headers)
    .then((res) => {
      this.setState({ userList: res.data });
    })
    .catch((err) => {
      console.log(err.data);
    });
  };
  //novoUsuario
  postNewUser = () => {
  const body = {
    name: this.state.inputName,
    email: this.state.inputEmail,
  };
  axios
    .post(BASE,body,headers)
    .then(() => {
      alert("O usuário foi criado com sucesso!");
      this.setState({inputName:""});
      this.setState({inputEmail:""});
      this.getAllUsers()
   
    })
    .catch((erro) => {
      console.log(erro);
    });
  };
  //trocarPagina para false/true
  onClickChangePage = ()=>{
  this.setState({changePage:!this.state.changePage})
  }


  render (){
// console.log(this.deletarUser)
    const lista = this.state.userList.map((us)=>{
  return <div>
    <p key={us.id}>{us.name}</p>
  <button onClick={()=>this.deletarUser(us.id)}>Deletar</button>
  </div> 
    })

    const trocaPagina=()=>{
      if (this.state.changePage){
      return<CriarUsuario>
      <h4>Criar usuário</h4>
      <input    
      value={this.state.inputName}
      onChange={this.handleName}
      />
      <input      
      value={this.state.inputEmail}
      onChange={this.handleEmail}
      />
      <button onClick={this.postNewUser}>Criar</button>
    </CriarUsuario>
      } else {
        return <ListaDeUsuarios>
        <h4>Lista de Usuários</h4>
        {lista}
     
      </ListaDeUsuarios>
      }
    }

  return (
      <Container>
      
        <h1>Labenusers</h1>
        <button onClick={this.onClickChangePage}>Trocar de página</button>
        {trocaPagina()}
        
      
      




    </Container>
    
    
  );
  }
}

export default App;
