import React from "react";
import { FcFullTrash } from "react-icons/fc";
import { URL, header } from "../../assets/Api/Api";
import axios from "axios";
import { ResetContainer, Playback } from "./styles";

export function ResetButton() {
  const reset = () => {
    axios
      .put(`${URL}/clear`, header)
      .then((res) => {
        alert(res.data.message);
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  return (
    <ResetContainer onClick={reset}>
      <Playback>Zerar Matches </Playback>
      <FcFullTrash size="40"></FcFullTrash>
    </ResetContainer>
  );
}