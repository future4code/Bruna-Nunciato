import React  from "react";
import { IconButton } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import { ToApproveContainer } from "../../styledPages/styledPages";
import axios from "axios";
import { BASE_URL } from "../../constants/url";

const ToApprovePage = (props) => {

  const approveCandidate = (candidateId) => {
    decideCandidate(true, candidateId);
    alert("Candidato aprovado!");
  };

  const rejectCandidate = (candidateId) => {
    decideCandidate(false, candidateId);
    alert("Candidato reprovado!");
  };

  const decideCandidate = (approve, candidateId) => {
    const headers = {
      headers: {
        auth: localStorage.getItem("token"),
      },
    };
    const body = {
      approve: approve,
    };
    axios
      .put(
        `${BASE_URL}/trips/${props.id}/candidates/${candidateId}/decide`, body,
        headers
      )
      .then((res) => {
        alert("Decisão efetuada!");
        window.location.reload();
      })
      .catch((erro) => {
        alert(erro.response.data.message);
      });
  };

  const candidateList =
    props.candidates &&
    props.candidates.map((candidate) => {
      return (
        <div className="cardCandidate">
          <h4>
            <b>Nome: </b>
            {candidate.name}{" "}
          </h4>
          <p>
            <b>Profissão: </b>
            {candidate.profession}
          </p>
          <p>
            <b>Idade: </b>
            {candidate.age}
          </p>
          <p>
            <b>País: </b>
            {candidate.country}
          </p>
          <p>
            <b>Motivação: </b>
            {candidate.applicationText}
          </p>
          <IconButton onClick={() => approveCandidate(candidate.id)}>
            <ThumbUpIcon />
          </IconButton>
          <IconButton onClick={() => rejectCandidate(candidate.id)}>
            <ThumbDownIcon />
          </IconButton>
        </div>
      );
    });

  return (
    <ToApproveContainer>
      {props.candidates ? (
        candidateList
      ) : (
        <p>Não existem Candidatos para esta Viagem</p>
      )}
    </ToApproveContainer>
  );
};

export default ToApprovePage;
