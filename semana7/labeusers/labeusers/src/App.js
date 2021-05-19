import styled from "styled-components";
import React from "react";
import TelaCadastro from "./components/TelaCadastro/TelaCadastro";
import TelaListaUsuario from "./components/TelaListaUsuario/TelaListaUsuario";

const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default class App extends React.Component {
  state = {
    changePage: true,
  };

  onClickChangePage = () => {
    this.setState({ changePage: !this.state.changePage });
  };

  render() {
    const trocaPagina = () => {
      if (this.state.changePage) {
        return <TelaCadastro />;
      } else {
        return <TelaListaUsuario />;
      }
    };

    return (
      <Container>
        <h1>Labenusers</h1>
        <button onClick={this.onClickChangePage}>Trocar de página</button>
        {trocaPagina()}
      </Container>
    );
  }
}
