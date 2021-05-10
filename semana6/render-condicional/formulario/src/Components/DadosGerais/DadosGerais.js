import styled from "styled-components"
import React from "react"


class DadosGerais extends React.Component {

  render() {
    return (
      <div>
        <h3>ETAPA - DADOS GERAIS</h3>
        <p>1. Qual o seu nome?</p>
        <input type="text"/>
        <p>2. Qual a sua idade?</p>
        <input type="text"/>
        <p>3. Qual seu email?</p>
        <input type="text"/>
        <p>4. Qual a sua escolaridade?</p>
        <select name="select">
            <option value="valor4" selected>
            Ensino Superior Completo   
            </option>
            <option value="valor3">Ensino Superior Incompleto
            </option>
            <option value="valor2" selected>
            Ensino Médio Completo
            </option>
            <option value="valor1">Ensino Médio Incompleto
            </option>
        </select>
      </div>
    );
  }
}       
export default DadosGerais;