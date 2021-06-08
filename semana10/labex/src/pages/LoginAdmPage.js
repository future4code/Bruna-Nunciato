import React from 'react'
import { LoginContainer } from './styledPages'
import Header from '../components/Header/Header'
import Footer from "../components/Footer/Footer";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

export default function LoginAdmPage() {
  return (
    <LoginContainer>
      <Header />
      <div className="BodyLoginContainer">
        <form className="LoginContainer" noValidate autoComplete="off">
            <h1>Login Administrativo</h1>
          <TextField id="outlined-basic" label="Email" variant="outlined" />
          <br/><br/>
          <TextField id="outlined-basic" label="Senha" variant="outlined" />
        <br/>
        <button className="EnterButton">Enviar</button>
      </form >
      </div>
      <Footer />
    </LoginContainer>
  );
}