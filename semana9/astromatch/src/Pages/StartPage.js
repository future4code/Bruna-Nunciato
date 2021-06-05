import React, { useState, useEffect } from "react";
import axios from "axios";
import CardMatch from "../components/CardMatch/CardMatch";
import { MatchContainer } from "./styles.js";
import { URL } from "../assets/Api/Api";
import Footer from "../components/Footer/Footer";

export default function StartPage() {
  const [profile, setProfile] = useState({});

  const getProfile = () => {
    if (profile === null) {
      alert(
        "Sinto Muito ninguém esta disponível para um date, tente mais tarde!"
      );
    } else {
      axios.get(`${URL}/person`).then((res) => {
        console.log(`profile`, res.data);
        setProfile(res.data.profile);
      });
    }
  };
  useEffect(() => {
    getProfile();
  }, []);
  return (
    <>
      <MatchContainer>
        {profile ? (
          <CardMatch
            photo={profile.photo}
            name={profile.name}
            age={profile.age}
            bio={profile.bio}
          />
        ) : (
          <p>
            <img
              width="100%"
              height="250px"
              width="100%"
              src="https://media1.tenor.com/images/becaac936d0c6ed8d0524347a484d600/tenor.gif"
            />{" "}
            Fé ! Vamos te desencalhar!
            <br></br>
            <br></br>
            <br></br>
            ... que tal limpar os matches<br/> da sua lista 
            e dar uma nova chance <br></br>para os pretendentes?
          </p>
        )}
      </MatchContainer>
      <Footer profile={profile} getProfile={getProfile} />
    </>
  );
}