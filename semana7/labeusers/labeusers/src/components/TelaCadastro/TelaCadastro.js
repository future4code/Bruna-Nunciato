import React from "react";
import axios from "axios";
import styled from "styled-components";

const CriarUsuario = styled.div`
  text-align: center;
`;

const BASE =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
const headers = {
  headers: {
    Authorization: "bruna-nunciato-paiva",
  },
};

export default class TelaCadastro extends React.Component {
  state = {
    inputName: "",
    inputEmail: "",
  };

  handleName = (event) => {
    this.setState({ inputName: event.target.value });
  };
  handleEmail = (event) => {
    this.setState({ inputEmail: event.target.value });
  };

  postNewUser = () => {
    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail,
    };
    axios
      .post(BASE, body, headers)
      .then(() => {
        alert("O usuário foi criado com sucesso!");
        this.setState({ inputName: "" });
        this.setState({ inputEmail: "" });
        this.getAllUsers();
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  render() {
    return (
      <CriarUsuario>
        <h4>Criar usuário</h4>
        <input
          placeholder={"Nome"}
          value={this.state.inputName}
          onChange={this.handleName}
        />
        <input
          placeholder={"E-mail"}
          value={this.state.inputEmail}
          onChange={this.handleEmail}
        />
        <button onClick={this.postNewUser}>Criar</button>
      </CriarUsuario>
    );
  }
}