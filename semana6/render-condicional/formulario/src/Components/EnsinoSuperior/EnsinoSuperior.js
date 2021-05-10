import styled from "styled-components"
import React from "react"



export class EnsinoSuperior extends React.Components {
  render() {
    return (
   <div className="App">
        <p>1. Por que você não terminou um curso de graduação?</p>
        <input type="text"></input>
        <p>2. Qual fez algum curso complementar?</p>
        <ul>Curso técnico</ul>
        <ul>Curso de inglês</ul>
        <ul>Não fiz curso complementar</ul>
        </div>
    );
  }
}       