import  DadosGerais  from './Components/DadosGerais/DadosGerais';
// import { EnsinoSuperior } from './Components/EnsinoSuperior/EnsinoSuperior';
// import {InfoEducacao} from "./Components/InfoEducacao";
// import { FormularioFinal } from './Components/FormularioFinal/FormularioFinal';
import styled from 'styled-components';
import React from 'react';

const MainContainer = styled.div`
  text-align: center;
  justify-content: center;
  display:flex;
  flex-direction: column;

`

class App extends React.Component {
  state=
    pagina: ["etapa1","etapa2","etapa3","etapa4"]
  
}

trocaDePagina=()=>{
  
}

  render() {

    return ( 
    <div>
       <h1>ETAPA - DADOS GERAIS</h1>
           <DadosGerais/>
     <button onClick={this.props.trocaDePagina} >Próxima Etapa</button>
        </div>
    );
  }
}
export default App;

