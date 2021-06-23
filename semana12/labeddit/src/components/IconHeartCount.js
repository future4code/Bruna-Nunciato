import React from 'react'
import {IconContainer, IconImage} from './styled'

const IconHeartCount = (props)=> {
	return <IconContainer>
		<IconImage alt={'Icone'} src={props.icone} onClick={props.onClickIcone}/>
		<p>{props.valorContador}</p>
	</IconContainer>
}
export default IconHeartCount