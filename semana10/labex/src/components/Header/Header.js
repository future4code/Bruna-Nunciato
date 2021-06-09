import React from 'react'
import { ContainerHeader } from '../../styled/StyledComponents'
import sistema from '../../img/system.png'
import foguete from '../../img/foguete33.png'
import { useHistory } from 'react-router-dom'


const Header = () => {
    const history = useHistory()

    const goHome = () => {
        history.push("/")
    }
    const goBack = () => {
        history.goBack()
    }

    return(
        <ContainerHeader>
            <h1 onClick={goHome} className="NameLogo" >Labe X</h1>
            <button onClick={goBack} className="ButtonBack">Voltar</button>
            <button className="LoginAdm">Administrativo</button>
           
        </ContainerHeader>
    )
}
export default Header