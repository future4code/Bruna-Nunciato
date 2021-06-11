import React from "react";
import { LoginContainer } from "./styledPages";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
// import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { BASE_URL } from "../constants/url";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import useForm from '../hooks/useForm'

const LoginAdmPage = () => {
  const { form, onChange, cleanFields } = useForm({ email: "", password: "" });

  const history = useHistory();
  

 
 
  const onClickLogin = (event) => {
    event.preventDefault();
    const body = { 
      email: form.email,
      password: form.password
     };

    axios
      .post(`${BASE_URL}/login`, body)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        history.push("/adm");
        alert("Login com sucesso")
      })
      .catch((err) => alert(err.response.data.message));

    cleanFields()
    
    };


  return (
    <LoginContainer>
      {console.log(`form` , form)}
      <Header />
      <div className="BodyLoginContainer">  
      
        <form 
        className="LoginContainer"  autoComplete="off"
        onSubmit={onClickLogin}>     
        <h1>Login Administrativo</h1>

{/* 

        <form onSubmit={onClickLogin}>
         <TextField name={"email"}
          onChange={onChange}
          placeholder="E-mail"
         value={form.email}
         label="Email"
         variant="outlined"
          required
          type={"email"}
         >


         </TextField>


         <TextField name={"password"}
         value={form.password}
         onChange={onChange}
         placeholder="senha"
         label="password"
         variant="outlined"
          required
          type={"password"}
          pattern={"^.{6,}"}
          title={"sua senha precisa ser de no mínimo 6 caracteres"}
         ></TextField>
         <Button
        //   className="EnterButton" 
        // variant="contained"
        // color="primary"
        //  endIcon={<Icon>send</Icon>}
      >        Enviar
      </Button>
            </form>  */}
            
            
            
            
        <TextField
          name={"email"}
            type="email"
            required
            value={form.email}
            onChange={onChange}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <br />
          <br />
          <TextField
          name={"password"}
          pattern={"^.{6,}"}
          title={"sua senha precisa ser de no mínimo 6 caracteres"}
          required
          type="password"
            value={form.password}
            onChange={onChange}
            id="outlined-basic"
            label="Senha"
            variant="outlined"
          />
          <br />
          <Button
          type="submit"
          className="EnterButton" 
        variant="contained"
        color="primary"
        className={""}
        endIcon={<Icon>send</Icon>}
      >        Enviar
      </Button>
        </form>
      </div>
      <Footer />
    </LoginContainer>
  );
};
export default LoginAdmPage;
