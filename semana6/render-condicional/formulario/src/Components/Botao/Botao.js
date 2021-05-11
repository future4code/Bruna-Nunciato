import styled from "styled-components"
import React from "react"



class Botao extends React.Component {
  render() {
    return (
       <div>
  
   <button onClick={this.trocaDePagina} >Próxima Etapa</button>
 
        </div>
    );
  }
}         
export default Botao;