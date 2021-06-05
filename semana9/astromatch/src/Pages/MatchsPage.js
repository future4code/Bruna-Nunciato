import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  MatchListContainer,
  SmallPhoto,
  Name,
  ListContainer,
  TitleMatch,
} from "./styles";
import { URL } from "../assets/Api/Api";
import { ResetButton } from "../components/ResetButton/ResetButton";

export default function MatchsPage() {
  const [matchList, setMatchList] = useState([]);

  const matches = () => {
    axios.get(`${URL}/matches`).then((res) => {
      setMatchList(res.data.matches);
    });
  };

  useEffect(() => {
    matches();
  }, [matchList]);

  return (
    <MatchListContainer>
      <TitleMatch>Seus Matches</TitleMatch>
      {matchList ? (
        <>
          {matchList.map((person) => {
            return (
              <ListContainer>
                <SmallPhoto src={person.photo} alt="foto" />
                <Name>{person.name}</Name>
              </ListContainer>
            );
          })}{" "}
        </>
      ) : (
        <p>Carregando ...</p>
      )}

      <ResetButton />
    </MatchListContainer>
  );
}