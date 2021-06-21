import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { HomeAdmContainer } from "../../styledPages/styledPages";
import { BASE_URL, UrlTrips } from "../../constants/url";
import useRequestApi from "../../hooks/useRequestApi";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import PageviewIcon from "@material-ui/icons/Pageview";
import useProtectedPage from "../../hooks/useProtectedPage";
import axios from "axios";

export default function HomeAdmPage() {
  const history = useHistory();
  const tripsList = useRequestApi(UrlTrips, []);


  const goToManager = (id) => {
    history.push(`/adm/viagens/detalhes/${id}`);
    localStorage.setItem("tripId", id);
  };
  const goToCreateTrip = () => {
    history.push("/adm/viagens/novaviagem");
  };

  useProtectedPage();

  const deleteTrip = (id) => {
    const headers = {
      headers: {
        auth: localStorage.getItem("token"),
      },
    };
    if (window.confirm("Deseja deletar esta viagem?")) {
      axios
        .delete(`${BASE_URL}/trips/${id}`, headers)
        .then((res) => {
          alert("Viagem deletada !");
          })
        .catch((erro) => {
          alert(erro.response.data.message);
        });
    }
  };

  return (
    <HomeAdmContainer>
      <Header />
      <div className="HomeAdmBodyContainer">
        <div className="TopContainer">
          <h1>Gerenciar Viagens</h1>
          <Button variant="contained" color="primary" onClick={goToCreateTrip}>
            {" "}
            Criar Viagem{" "}
          </Button>
        </div>

        <div className="Showcase">
          {tripsList.trips &&
            tripsList.trips.map((trip) => {
              return (
                <div key={trip.id} className="CardTrips">
                  <div className="Title">
                    <h3>{trip.name}</h3>
                    <IconButton onClick={()=>deleteTrip(trip.id)} aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                  </div>
                  <p><b>Planeta: </b>{trip.planet}</p>
                  <p><b>Duração:</b> {trip.durationInDays} dias</p>
                  <p><b>Data: </b>{trip.date}</p>
                  <p><b>Descrição: </b>{trip.description}</p>
                    <Button
                    onClick={() => goToManager(trip.id)}
                    variant="contained"
                    color="primary"
                    className={""}
                    startIcon={<PageviewIcon />}
                  >
                    Detalhes da Viagem
                  </Button>
                </div>
              );
            })}
        </div>
      </div>
      <Footer />
    </HomeAdmContainer>
  );
}
