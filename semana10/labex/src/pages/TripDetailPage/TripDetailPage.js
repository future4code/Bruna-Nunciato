import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/url";
import { useHistory } from "react-router-dom";
import useProtectedPage from "../../hooks/useProtectedPage";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import DescriptionIcon from "@material-ui/icons/Description";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
// import { makeStyles } from '@material-ui/core/styles';
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { TripDetailContainer } from "../styledPages";
import ToApprovePage from "./ToApprovePage";
import ApprovedPage from "./ApprovedPage";
import { useParams } from "react-router-dom";

const TripDetailPage = () => {
  const [tripDetail, setTripDetail] = useState();
  const history = useHistory();
  const [approved, setApproved] = useState(false);
  const [toApprove, setToApprove] = useState(false);
  const params = useParams();

  useProtectedPage();

  const handleApproved = () => {
    setApproved(!approved);
  };
  const handleToApprove = () => {
    setToApprove(!toApprove);
  };

  useEffect(() => {
    document.title = "LabeX - Viagens";

    axios
      .get(`${BASE_URL}/trip/${params.id}`, {
        headers: {
          auth: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setTripDetail(res.data.trip);
      })
      .catch((err) => alert(err.response.data));
  });

  return (
    <TripDetailContainer>
      <Header />
      <div className="TripDetailBodyContainer">
        <h2> Detalhes da Viagem </h2>
        {tripDetail ? (
          <div className="Card">
            <h3>{tripDetail.name}</h3>
            <div className="CardContent">
              <div className="planet">
                <b>Planeta:</b> {tripDetail.planet}
              </div>
              <div className="duration">
                <b>Duração:</b> {tripDetail.durationInDays} dias
              </div>
              <div className="date">
                <b>Data:</b>
                {tripDetail.date}
              </div>
              <div className="description">
                <b>Descrição:</b>
                {tripDetail.description}
              </div>
            </div>
          </div>
        ) : (
          <p>Carregando...</p>
        )}

        <br />
        <br />
        <Button
          onClick={handleToApprove}
          variant="contained"
          color="primary"
          className={""}
          startIcon={<DescriptionIcon />}
        >
          Candidatos
        </Button>
        <Button
          onClick={handleApproved}
          variant="contained"
          color="primary"
          className={""}
          startIcon={<AccountBoxIcon />}
        >
          Aprovados
        </Button>
        {toApprove && (
          <ToApprovePage candidates={tripDetail.candidates} id={params.id} />
        )}
        {approved && <ApprovedPage candidateApproved={tripDetail.approved} />}
      </div>
      <Footer />
    </TripDetailContainer>
  );
};
export default TripDetailPage;
