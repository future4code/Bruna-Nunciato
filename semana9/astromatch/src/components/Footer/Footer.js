import React from "react";
import { BotaoContainer } from "./styles";
import { URL, body, header } from "../../assets/Api/Api";
import axios from "axios";
import { FcCancel, FcLike } from "react-icons/fc";

export default function Footer(prop) {
  const getLike = (validation) => {
    if (prop.profile) {
      return axios
        .post(`${URL}/choose-person`, body(prop.profile.id, validation), header)
        .then((res) => {
          if (res.data.isMatch) {
            alert("Deu Match!!");
          }
          prop.getProfile();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <BotaoContainer>
      <FcCancel size="60" cursor="pointer" onClick={() => getLike(false)}>
        {" "}
      </FcCancel>
      <FcLike size="60" cursor="pointer" onClick={() => getLike(true)}></FcLike>
    </BotaoContainer>
  );
}