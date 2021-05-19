import React from "react";
import axios from "axios";
import styled from "styled-components";

const ListaDeUsuarios = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const BASE =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
const headers = {
  headers: {
    Authorization: "bruna-nunciato-paiva",
  },
};

export default class TelaListaUsuario extends React.Component {
  state = {
    userList: [],
  };

  componentDidMount() {
    this.getAllUsers();
  }

  getAllUsers = () => {
    axios
      .get(BASE, headers)
      .then((res) => {
        this.setState({ userList: res.data });
      })
      .catch((err) => {
        console.log(err.data);
      });
  };

  deletarUser = (id) => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
        headers
      )
      .then((ser) => {
        alert("usuário deletado!");
      })
      .catch((erro) => {
        alert("erro");
        console.log(erro);
      });
    this.getAllUsers();
  };

  render() {
    const lista = this.state.userList.map((us) => {
      return (
        <div>
          <p key={us.id}>{us.name}</p>
          <button onClick={() => this.deletarUser(us.id)}>Deletar</button>
        </div>
      );
    });

    return (
      <ListaDeUsuarios>
        <h4>Lista de Usuários</h4>
        {lista}
      </ListaDeUsuarios>
    );
  }
}
