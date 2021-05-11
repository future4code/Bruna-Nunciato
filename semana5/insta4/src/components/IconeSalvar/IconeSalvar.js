import React from 'react'
import styled from 'styled-components'

const IconConjunto = styled.div`
	display: flex;
`
const Imagem = styled.img`
	margin-right: 5px;
`

export function IconeSalvar(props) {
	return <IconConjunto>
		<Imagem alt={'Icone'} src={props.icone} onClick={props.onClickInfo}/>
		</IconConjunto>
}
