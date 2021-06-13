import React from "react";
import { TripsContainer } from "./styledPages";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
// import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { UrlTrips } from "../constants/url";
import useRequestApi from "../hooks/useRequestApi";
import foguete from '../img/foguete33.png'

export default function TripsPage() {
  const history = useHistory();
  const tripsList = useRequestApi(UrlTrips, []);

  const goToForms = () => {
    history.push("/viagens/formulario");
  };
  const tripShow =
    tripsList.trips &&
    tripsList.trips.map((trip) => {
      return (
        <div key={trip.id} className="CardTrips">
          <h3>{trip.name}</h3>
          <p>
            <b>Planeta:</b> {trip.planet}
          </p>
          <p>
            <b>Duração: </b>
            {trip.durationInDays} dias
          </p>
          <p>
            <b>Data: </b>
            {trip.date}
          </p>
          <p>
            <b>Descrição: </b>
            {trip.description}
          </p>
        </div>
      );
    });

  return (
    <TripsContainer>
      <Header />
      <div className="BodyTripsContainer">
        <div className="TopContainer">
          <div className="foguete1">
        <img className="foguete1" src={foguete} alt="foguete" />
        </div>
          <h1>Próximas Viagens</h1>
          <Button variant="contained" onClick={goToForms}>
            {" "}
            Inscreva-se
          </Button>
          <div className="foguete2">
          <img className="foguete2" src={foguete} alt="foguete" />
          </div>
        </div>
        <div className="Showcase">
          {tripsList.trips ? tripShow : <p>Carregando...</p>}
        </div>
      </div>
      <Footer />
    </TripsContainer>
  );
}
