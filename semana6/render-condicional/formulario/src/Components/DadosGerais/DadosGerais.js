import styled from "styled-components"
import React from "react"


const Conteudo = styled.div`
  display:flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`
class DadosGerais extends React.Component {

  render() {
    return (
      <div>
        <p>1. Qual o seu nome?</p>
        <input type="text"></input>
        <p>2. Qual a sua idade?</p>
        <input type="text"></input>
        <p>Qual seu email?</p>
        <input tyoe="text"></input>
        <p>Qual a sua escolaridade?</p>
        <select name="select">
          <option value="valor1">Ensino Médio Incompleto</option>
          <option value="valor2" selected>
            Ensino Médio Completo
          </option>
          <option value="valor3">Ensino Superior Incompleto</option>
          <option value="valor4" selected>
            Ensino Superior Completo  </option>
        </select>
      </div>
    );
  }
}       
export default DadosGerais;