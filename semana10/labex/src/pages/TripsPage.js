import React from "react";
import { TripsContainer } from "./styledPages";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
// import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { UrlTrips } from "../constants/url";
import useRequestApi from "../hooks/useRequestApi";

export default function TripsPage() {
  const history = useHistory();
  const tripsList = useRequestApi(UrlTrips, []);

  const goToForms = () => {
    history.push("/formulario");
  };
  const tripShow = tripsList.trips && tripsList.trips.map((trip) => {
        return <div key={trip.id} className="CardTrips">
            <h3>{trip.name}</h3>
            <p>Planeta: {trip.planet}</p>
            <p>Duração: {trip.durationInDays} dias</p>
            <p>Data:{trip.date}</p>
            <p>Descrição:{trip.description}</p>
          </div>
        })
        

  return (
    
    <TripsContainer>
      <Header />
      <div className="BodyTripsContainer">
        <div className="TopContainer">
          <h1>Próximas Viagens</h1>
          <Button variant="contained" onClick={goToForms}>
            {" "}
            Inscreva-se
          </Button>
        </div><div className="Showcase">
        {tripsList ? (tripShow) : (<p>Carregando...</p>)}
 </div>
      </div>
      <Footer />
    </TripsContainer>
  );
}