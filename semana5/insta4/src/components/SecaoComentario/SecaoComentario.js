import React, {Component} from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;

`;

const InputComentario = styled.input`
  width: 100%;
  margin-right: 5px;
`;

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
    // this.setState({ comentario: event.target.value });
    console.log({ comentario: event.target.value });

  };

  render() {
    const listaDeComentarios = this.state.comentario.map((comenta) => {
      return <div><p>{comenta}</p> </div>;
    });

    return (
      <CommentContainer>
		{listaDeComentarios}
		<br></br>
				
        <InputComentario
          placeholder={"Comentário"}
          value={this.state.valorInputcomentario}
          onChange={this.onChangeComentario}
        />
        <button onClick={this.props.aoEnviar}>Enviar</button>
      
	  </CommentContainer>
    );
  }
}
