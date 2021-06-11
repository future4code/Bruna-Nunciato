import React from "react";
import { TripsContainer } from "./styledPages";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import { HomeAdmContainer } from "./styledPages";

export default function HomeAdmPage() {
  const history = useHistory()

  const goToManager = () =>{
    history.push('/detalhesviagem')
  }
  const goToCreateTrip = () =>{
    history.push('/novaviagem')
  }

  return (
    <HomeAdmContainer>
      <Header />
      <div className="HomeAdmBodyContainer">
        <div className="TopContainer"> 
        <h1>Gerenciar Viagens</h1>
       <button onClick={goToManager}> Entrar na Viagem</button>
       <button onClick={goToCreateTrip}> Criar Viagem </button>
        <div className="Showcase">
        <div className="CardTrips">
          <h4>Galaxy Slow</h4>
          <p>Marte</p>
          <p>80 graus</p>
          <p>2022</p>
        </div>
        <div className="CardTrips">
          <h4>Galaxy Slow</h4>
          <p>Marte</p>
          <p>80 graus</p>
          <p>2022</p>
        </div>
        <div className="CardTrips">
          <h4>Galaxy Slow</h4>
          <p>Marte</p>
          <p>80 graus</p>
          <p>2022</p>
        </div>
        <div className="CardTrips">
          <h4>Galaxy Slow</h4>
          <p>Marte</p>
          <p>80 graus</p>
          <p>2022</p>
        </div></div>
      </div></div>
      <Footer />
    </HomeAdmContainer>
  );
}