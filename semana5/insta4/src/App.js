import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const NovosDados = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border: 1px solid gray;
  width:300px;
  padding: 20px 0;
  margin-top:5px;
  background-color: rgba(190, 214, 205, 0.356);
`


class App extends React.Component {
  state={
    pessoa:[
      {
      nomeUsuario: 'Paulinha',
      fotoUsuario:'https://picsum.photos/50/50',
      fotoPost:'https://picsum.photos/200/150'
    },
      {
      nomeUsuario:'Zorii',
      fotoUsuario:'https://picsum.photos/400/400?a=2',
      fotoPost:'https://picsum.photos/400/400?a=5'
    },
      {
      nomeUsuario:'Kylo',
      fotoUsuario:'https://picsum.photos/400/400?a=7',
      fotoPost:'https://picsum.photos/400/400?a=2'
    }
  ],
  valorInputNomeUsuario:"",
  valorInputFotoUsuario:"",
  valorInputFotoPostagem:""
  }

  adicionaPost = () => {
    const novaPessoa = {
      nomeUsuario: this.state.valorInputNomeUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPostagem
    };
    const novoPost = [novaPessoa,...this.state.pessoa];


    this.setState({ pessoa: novoPost,
      valorInputNomeUsuario:"",
      valorInputFotoUsuario:"",
      valorInputFotoPostagem:"" });
  };

  onChangeInputPessoa = (event) => {
    this.setState({ valorInputNomeUsuario: event.target.value });
  };

  onChangeInputFotoPerfil = (event) => {
    this.setState({ valorInputFotoUsuario: event.target.value });
  };
  onChangeInputFotoPostagem = (event) => {
    this.setState({ valorInputFotoPostagem: event.target.value });
  };



  render (){
    const listaDePostagem = this.state.pessoa.map((pessoa)=>{
      
      return(
        
        <Post
          nomeUsuario={pessoa.nomeUsuario}   
          fotoUsuario={pessoa.fotoUsuario}
          fotoPost={pessoa.fotoPost}
        />
        
      )
    })
    
    return (
      <MainContainer>
        <NovosDados>
        <input     
        value={this.state.valorInputNomeUsuario}
        onChange={this.onChangeInputPessoa}
        placeholder={"Nome"}
       />
       <br></br>
        <input
         value={this.state.valorInputFotoUsuario}
         onChange={this.onChangeInputFotoPerfil}
         placeholder={"Link Foto Perfil"}
       />
       <br></br>
       <input
         value={this.state.valorInputFotoPostagem}
         onChange={this.onChangeInputFotoPostagem}
         placeholder={"Link Foto"}
         />
         <br></br>
         <button onClick={this.adicionaPost}>Postar</button>
          </NovosDados>
        <br></br>
        {listaDePostagem}
        
             
      </MainContainer>
    );
  }
}

export default App;
