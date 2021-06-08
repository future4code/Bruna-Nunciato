import React from "react";
import { TripsContainer } from "./styledPages";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

export default function TripsPage() {
  return (
    <TripsContainer>
      <Header />
      <div className="BodyTripsContainer">
        <div className="TopContainer"> 
        <h1>Próximas Viagens</h1>
        <button> Inscreva-se</button>
        </div>
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
      </div>
      <Footer />
    </TripsContainer>
  );
}