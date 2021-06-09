import React from "react";
import { LoginContainer } from "./styledPages";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { BASE_URL } from "../constants/url";
import axios from "axios";
import { useHistory } from "react-router-dom";
import useInput from "../hooks/useInput";
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core/styles';

const LoginAdmPage = () => {
//   const [email, handleEmail] = useInput("");
//   const [password, handlePassword] = useInput("");
//   const history = useHistory();

//   const onClickLogin = () => {
//     const body = { email, password };

//     axios
//       .post(`${BASE_URL}/login`, body)
//       .then((res) => {
//         localStorage.setItem("token", res.data.token);
//         history.push("/trip-detail");
//       })
//       .catch((err) => alert(err.response.data.message));
//   };

  return (
    <LoginContainer>
      <Header />
      <div className="BodyLoginContainer">
        <form className="LoginContainer" noValidate autoComplete="off">
          <h1>Login Administrativo</h1>
          {/* <TextField
            value={email}
            onChange={handleEmail}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <br />
          <br />
          <TextField
            value={password}
            onChange={handlePassword}
            id="outlined-basic"
            label="Senha"
            variant="outlined"
          /> */}
          <br />
          {/* <button className="EnterButton" onClick={onClickLogin}> */}
            {/* Enviar
          </button> */}
          <Button
        variant="contained"
        color="primary"
        className={""}
        endIcon={<Icon>send</Icon>}
      >
        Enviar
      </Button>
        </form>
      </div>
      <Footer />
    </LoginContainer>
  );
};
export default LoginAdmPage;
