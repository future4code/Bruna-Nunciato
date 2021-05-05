import React, {Component} from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
`

export class SecaoComentario extends Component {
	state = {
		comentario:"",
	}

	onChangeComentario = (event)=> {
		this.setState({comentario: event.target.value });
		console.log({comentario: event.target.value})
	}

	aoEnviar = () =>{
		console.log(this.state.comentario.value);
		

		
		this.setState({comentario:""});
		return
	}
		

	render() {
		return <CommentContainer>
			
			<InputComentario
				placeholder={'Comentário'}
				value={this.state.comentario}
				onChange={this.onChangeComentario}
			/>
			<button onClick={this.props.aoEnviar}>Enviar</button>
		</CommentContainer>
	}
}
