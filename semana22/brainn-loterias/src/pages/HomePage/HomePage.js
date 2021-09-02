import * as React from "react";
import { MainDiv } from "./styled";
import { GlobalStateContext } from "../../global/GlobalStateContext";

const HomePage = () => {
  const { games, selected, setSelected, concursos, resultado, setLuck, luck, name, setName } =
    React.useContext(GlobalStateContext);

  const dropBox =
    games &&
    games.map((game) => {
      return (
        <option key={game.nome} value={game.id}>
          {game.nome}
        </option>
      );
    });
  const getSelected = (event) => {
    setSelected(event.target.value);
  };
  {
    if (selected) {
      setLuck(concursos[selected]);
      setName(games[selected])
      console.log(`nommmmmmmmeee`,name.nome)
    }
  }


  return (
    <MainDiv>
      <b>HELLO</b>
      {console.log(`jogoss`, concursos)}
      <select onChange={getSelected}>{dropBox}</select>
      {console.log(`selecionado e resetado`, selected)}
      {console.log(`resultado`, resultado)}
      {console.log(`luckk`, luck.concursoId)}
      <h1>{name.nome}</h1>
     
      <h3>
        {resultado ? resultado.numeros : <p>Aguarde o resultado</p>}

        {/* {selected && resultado && resultado.map((r)=>{
          return<p>{r.numeros}</p>
        }) */}
        {/* } */}
      </h3> 
      <h2>{selected && resultado.data}</h2>
    </MainDiv>
  );
};

export default HomePage;
