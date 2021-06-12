import React from 'react'
import sistema from './system.png'
import foguete from './foguete33.png'
import { Anima } from '../styled/StyledComponents'

export default function (){

    return(
        <Anima>
        <img className="imagem" src={sistema} alt="system" />
        <img className="foguete" src={foguete} alt="foguete" />
        </Anima>
       
    )
}
