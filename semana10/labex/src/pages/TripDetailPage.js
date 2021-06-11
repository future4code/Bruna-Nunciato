import React,{ useState, useEffect } from 'react'
import axios from 'axios';
import {BASE_URL} from '../constants/url'
import { useHistory } from 'react-router-dom';
import useProtectedPage from '../hooks/useProtectedPage';
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import DescriptionIcon from "@material-ui/icons/Description";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
// import { makeStyles } from '@material-ui/core/styles';
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { TripDetailContainer } from "./styledPages";

const TripDetailPage = () => {
  const [trip, setTrip] = useState({});
  const history = useHistory();

  useProtectedPage();



  useEffect(() => {
    document.title = "LabeX - Viagens";
  });

  const getTripDetail = (id) => {
    axios
      .get(`${BASE_URL}/trip/${id}`, {
        headers: {
          auth: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setTrip(res.data.trip);
      })
      .catch((err) => alert(err.response.data));
  };

  useEffect(() => {
    getTripDetail("assistir aula");
  }, []);

  return (
    <TripDetailContainer>
      <Header />
      <div className="TripDetailBodyContainer">
        <h2> Gerenciar Trips </h2>
        {trip.name ? trip.map((trip)=>{
          return( <div className="Card">
          <h3>{trip.name}</h3>
          <p>Planeta: {trip.planet}</p>
          <p>Duração: {trip.durationInDays} dias</p>
          <p>Data:{trip.date}</p>
          <p>Descrição:{trip.description}</p>
        </div>
            
          )
        }) : <p>Carregando...</p>}
        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>

        <Button
          variant="contained"
          color="secondary"
          className={""}
          startIcon={<DeleteIcon />}
        >
          Apagar
        </Button>
        <br />
        <br />
        <Button
          variant="contained"
          color="primary"
          className={""}
          startIcon={<DescriptionIcon />}
        >
          Candidatos
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={""}
          startIcon={<AccountBoxIcon />}
        >
          Aprovados
        </Button>
      </div>
      <Footer />
    </TripDetailContainer>
  );
};
export default TripDetailPage;