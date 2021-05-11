import React, {Component} from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
  flex-direction:column;
  
  
`;



const Comentar = styled.div`
  display: flex;
  justify-content: center;

` 
const InputComentario = styled.input`
  width: 100%;
  margin-right: 5px;
  
`;
const Listinha = styled.div`
margin: 0 2px;
padding: 2px 9px;
`

export class SecaoComentario extends Component {
  state = {
    comentario: [""],

    valorInputComentario: "",
  };

  aoEnviar = () => {
    const novoComentario = {
      comentarionovo: this.state.valorInputComentario,
    };
    const comentarioNovo = [...this.state.comentario, novoComentario];
    this.setState({ comentario: comentarioNovo });
  };

  onChangeComentario = (event) => {
    this.setState({ valorInputComentario: event.target.value });
    console.log({ comentario: event.target.value });
       

  };

  render() {
    const listaDeComentarios = this.state.comentario.map((comenta) => {
      return <div><p>{comenta}</p> </div>;
    });

    return (
      <CommentContainer>
        <Listinha>
          {listaDeComentarios}
          </Listinha>

        <Comentar>
          <InputComentario
            placeholder={"Comentário"}
            value={this.state.valorInputcomentario}
            onChange={this.onChangeComentario}
          />
          <button onClick={this.props.aoEnviar}>Enviar</button>
        </Comentar>
      </CommentContainer>
    );
  }
}
