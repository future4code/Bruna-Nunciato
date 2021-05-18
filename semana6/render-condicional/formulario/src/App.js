import DadosGerais  from './Components/DadosGerais/DadosGerais';
import EnsinoSuperior  from './Components/EnsinoSuperior/EnsinoSuperior';
import InfoEducacao from './Components/InfoEducacao/InfoEducacao';
import FormularioFinal from './Components/FormularioFinal/FormularioFinal';
import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  text-align: center;
  justify-content: center;
  display:flex;
  flex-direction: column;

`

class App extends React.Component {
  state={
    pagina:"etapa1"}

//vai alternando de etapas
trocaDePagina=()=>{
  if (this.state.pagina === "etapa1"){
    this.setState({pagina: "etapa2"})
  }else if (this.state.pagina === "etapa2"){
    this.setState({pagina: "etapa3"})
    } else if (this.state.pagina === "etapa3"){
       this.setState({pagina: "etapa4"})
}
}


  render() {
 //vai alternando de pagina
    const atualizaPagina = () => {
      if (this.state.pagina === "etapa1"){
        return  <DadosGerais/>
        } else if (this.state.pagina === "etapa2"){
        return <InfoEducacao/>
        } else if (this.state.pagina === "etapa3"){
        return <EnsinoSuperior/>
        } else if (this.state.pagina === "etapa4"){
        return <FormularioFinal/>
        }
  }

    return ( 
    <MainContainer>
    <div>{atualizaPagina()} </div>
    <br/><br/><div>
   <button onClick={this.trocaDePagina} >Próxima Etapa</button>
   </div>
     
    </MainContainer>
    );
    }
  }
export default App;

