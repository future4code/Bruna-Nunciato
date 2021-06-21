import React from 'react'
import { ContainerHeader } from '../../styledComponents/StyledComponents'
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

    const logout = () => {
        localStorage.removeItem("token")
    }

    return(
        <ContainerHeader>
                   
            <h1 onClick={goHome} className="NameLogo" >Labe X</h1>

            { history.location.pathname === "/" ?  <p></p>:<Button variant="contained" color="primary"
            onClick={goBack} className="ButtonBack">Voltar
                </Button> }
            
              {history.location.pathname === "/"    &&
 <Button variant="contained" color="primary"
             className="LoginAdm"
            onClick={goLogin}>Administrativo</Button>
            }

{history.location.pathname === "/adm/viagens"  && 
<Button variant="contained" color="primary"
             className="LoginAdm"
            onClick={logout}>Logout</Button>
            }
            
{history.location.pathname === "/adm/viagens/novaviagem" 
 && 
<Button variant="contained" color="primary"
             className="LoginAdm"
            onClick={logout}>Logout</Button>
            }

           
           
        </ContainerHeader>
    )
}
export default Header