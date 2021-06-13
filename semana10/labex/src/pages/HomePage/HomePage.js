import React from "react";
import { HomeContainer } from "../../styledPages/styledPages";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useHistory } from "react-router-dom";
import Sistema from '../../img/system.png'

export default function HomePage() {
  const history = useHistory();

  const goTrips = () => {
    history.push("/viagens");
  };

  return (
    <HomeContainer>
      <Header />
      <div className="BodyHomeContainer" >
        <img  src={Sistema} alt="solar system"/>
           <button onClick={goTrips} className="TripsUser">
          Viagens
        </button>
      </div>
      <Footer />
    </HomeContainer>
  );
}
