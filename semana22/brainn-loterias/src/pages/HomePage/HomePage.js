import * as React  from 'react';
import axios from 'axios'
import { MainDiv } from './styled';
import {URL} from '../../Api/Api'

const HomePage = ()=> {
 const [games, setGames] = React.useState()

 const getLotto = () => {
      if (games === null) {
        alert(
          "Aguarde para ver os resultados das principais Loterias"
        );
      } else {
        axios.get(`${URL}/loterias`)
        .then((res) => {
            setGames(res.data)
        })
        .catch((erro)=>{
            console.log(erro)
        }
        )
      }
    }  
    const ListGame = games.map ((game) => {
        return <p>{game.nome}</p>
    })
    React.useEffect(() => {
    getLotto()
      },[])
    
   
        return(
        <MainDiv>
        <b>HELLO</b>
        {ListGame}
        </MainDiv>
        )     
   
    }

export default HomePage