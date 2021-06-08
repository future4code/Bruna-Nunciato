import React from 'react'
import { ContainerHeader } from '../../styled/StyledComponents'
import sistema from '../../img/system.png'
import foguete from '../../img/foguete33.png'

export default function Header (){

    return(
        <ContainerHeader>
            <h1 className="NameLogo" >Labe X</h1>
            <button className="ButtonBack">Voltar</button>
            <button className="LoginAdm">Administrativo</button>
           
        </ContainerHeader>
    )
}