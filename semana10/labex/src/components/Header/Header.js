import React from 'react'
import { ContainerHeader } from '../../styled/StyledComponents'
// import sistema from '../../img/system.png'
// import foguete from '../../img/foguete33.png'
import { useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button';


const Header = () => {
    const history = useHistory()

    const goHome = () => {
        history.push("/")
    }
    const goBack = () => {
        history.goBack()
    }
    const goLogin = () => {
        history.push("/login")
    }

    return(
        <ContainerHeader>
            {console.log(history.location.pathname)}
          
            <h1 onClick={goHome} className="NameLogo" >Labe X</h1>

            { history.location.pathname === "/" ? <p></p>:<Button variant="contained" color="primadary"
            onClick={goBack} className="ButtonBack">Voltar
                </Button> }
            
              {history.location.pathname === "/" &&
 <Button variant="contained" color="secondary"
             className="LoginAdm"
            onClick={goLogin}>Administrativo</Button>
            }

           
            
           
           
        </ContainerHeader>
    )
}
export default Header