import styled from "styled-components";
import React from "react";


class EnsinoSuperior extends React.Component {
  render() {
    return (
      <div>
        <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>
        <p>7. Por que você não terminou um curso de graduação?</p>
        <input type="text" />
        <p>8. Qual fez algum curso complementar?</p>
        <select name="select">
          <option value="valor1">Nenhum</option>
          <option value="valor2" selected>
            Curso de Inglês
          </option>
          <option value="valor3">Curso Técnico</option>
          </select>

      </div>
    );
  }
}
export default EnsinoSuperior;
