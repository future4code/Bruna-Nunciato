import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state={
    pessoa:[
      {
      nomeUsuario: 'paulinha',
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
  valorInputUsuario:"",
  valorInputFotoUsuario:"",
  valorInputFotoPostagem:""
  }

  adicionaPost = () => {
    const novaPessoa = {
      nomeUsuario: this.state.valorInputPessoa,
      fotoUsuario: this.state.valorInputFotoPerfil,
fotoPost: this.state.valorInputFotoPostagem
    };
    const novoPost = [...this.state.pessoa, novaPessoa];


    this.setState({ pessoas: novaPessoa });
  };

  onChangeInputPessoa = (event) => {

    this.setState({ valorInputPessoa: event.target.value });
  };

  onChangeInputFotoPerfil = (event) => {
    this.setState({ valorInputFotoPerfil: event.target.value });
  };
onChangeInputFotoPostagem = (event) => {
    this.setState({ valorInputFotoPostagem: event.target.value });
  };



  render (){
    const listaDePostagem = this.state.pessoa.map((pessoa)=>{
      
      return(
        <div>
        <input     
        value={this.state.valorInputUsuario}
        onChange={this.onChangeInputPessoa}
        placeholder={"Nome"}
       />
       
        <input
         value={this.state.valorInputFotoUsuario}
         onChange={this.onChangeInputFotoPerfil}
         placeholder={"Foto Perfil"}
       />
       
       <input
         value={this.state.valorInputFotoPostagem}
         onChange={this.onChangeInputFotoPostagem}
         placeholder={"Foto Postagem"}
         />
         
       <button onClick={this.adicionaPost}>Postar</button>

        
        <Post
          nomeUsuario={pessoa.nomeUsuario}   
          fotoUsuario={pessoa.fotoUsuario}
          fotoPost={pessoa.fotoPost}
        />
        </div>
      )
    })
    
    return (
      <MainContainer>
        {listaDePostagem}
        
             
      </MainContainer>
    );
  }
}

export default App;
