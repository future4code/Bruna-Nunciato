import * as React from "react";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import moment from "moment";
import {
  MainDiv,
  SelectLotto,
  BallsContainer,
  AllBalls,
  LeftSection,
  RightSection,
  Text,
  InfoContainer,
  Header,
  MiddleContainer,
  GameName,
} from "./styled";
import { Trevo } from "../../img/Trevo";
import megasena from "../../img/megasena.svg";
import lotomania from "../../img/lotomania.svg";
import quina from "../../img/quina.svg";
import timemania from "../../img/timemania.svg";
import lotofacil from "../../img/lotofacil.svg";
import diadesorte from "../../img/diadesorte.svg";
import { MediaMatcher } from 'react-media-match';

const HomePage = () => {
  const {
    games,
    selected,
    setSelected,
    concursos,
    resultado,
    setLuck,
    luck,
    name,
    setName,
  } = React.useContext(GlobalStateContext);

  React.useEffect(() => {
    getSelected();
  }, [selected]);

  const dropDown =
    games &&
    games.map((game) => {
      return (
        <option key={game.nome} value={game.id}>
          {game.nome.toUpperCase()}
        </option>
      );
    });

  const numbers =
    resultado &&
    resultado.numeros &&
    resultado.numeros.map((number) => {
      return <BallsContainer>{number}</BallsContainer>;
    });

  const getSelected = (event) => {
    setSelected(event ? event.target.value : 0);
  };
  {
    if (selected) {
      setLuck(concursos[selected]);
      setName(games[selected]);
    }
  }

  const dia = moment(resultado.data).format("DD/MM/YYYY");

  const getColor = () => {
    switch (name.nome) {
      case "mega-sena":
        return megasena;
      case "lotomania":
        return lotomania;
      case "quina":
        return quina;
      case "timemania":
        return timemania;
      case "dia de sorte":
        return diadesorte;
      case "lotofácil":
        return lotofacil;
      default:
        return megasena;
    }
  };

  return (
    <MainDiv>
      <MediaMatcher
  mobile={'render for mobile'}
  // tablet={"tablet"} // mobile will be rendered for a "skipped" tablet - "pick value to the left"
  desktop={    
  <LeftSection color={getColor()}>
        <Header>
          <SelectLotto onChange={getSelected}>{dropDown}</SelectLotto>
        </Header>
        <MiddleContainer>
          <Trevo />
          <GameName>{name.nome.toUpperCase()}</GameName>
        </MiddleContainer>
        <InfoContainer>
          <h5>CONCURSO</h5>
          <b>
            {luck ? luck.concursoId : <p>Aguarde o resultado</p>} - {dia}
          </b>
        </InfoContainer>
      </LeftSection>
    }
/>
  
      <RightSection>
        <AllBalls>{numbers}</AllBalls>
        <Text>
          Este sorteio é meramente ilustrativo e não possui nenhuma ligação com
          a CAIXA.
        </Text>
      </RightSection>
    </MainDiv>
  );
};

export default HomePage;
