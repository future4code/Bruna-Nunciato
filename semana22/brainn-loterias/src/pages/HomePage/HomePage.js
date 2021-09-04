import * as React from "react";
import { MainDiv } from "./styled";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import moment from 'moment'

const HomePage = () => {
  const { games, selected, setSelected, concursos, resultado, setLuck, luck, name, setName } =
    React.useContext(GlobalStateContext);

    React. useEffect(() => {
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

    const numbers = resultado && 
    resultado.numeros &&
    resultado.numeros.map((number)=>{
      return (<>
        <b>{number}</b><br/>
        </>
      )
    })

  const getSelected = (event) => {
    setSelected(event?event.target.value:0);
  };
  {
    if (selected) {
      setLuck(concursos[selected]);
      setName(games[selected])
    }
  }

  const dia = moment(resultado.data).format("DD/MM/yyyy")

  return (
    <MainDiv>
    {console.log(`jogoss`, concursos)}
    <select onChange={getSelected}>{dropDown}</select>
    <h1>{name.nome.toUpperCase()}</h1>

    <h3>
           
      <div>{numbers}</div>
      <br/>
      CONCURSO
      <br/>
      {luck ? luck.concursoId : <p>Aguarde o resultado</p>} - {dia}

      {/* {selected && resultado && resultado.map((r)=>{
        return<p>{r.numeros}</p>
      }) */}
      {/* } */}
    </h3> 
    <h2>Este sorteio é meramente ilustativo enão possui nenhuma ligação com a CAIXA</h2>
  </MainDiv>
);
};


//     <MainDiv>{console.log(luck)}
//     {console.log(name)}
//     {console.log(games)}
//     {console.log(concursos)}

//     {console.log(`jogoss`, concursos)}
//       {console.log(`selecionado e resetado`, selected)}
//       {console.log(`resultado`, resultado)}
//       {console.log(`luckk`, luck.concursoId)}
//       <select onChange={getSelected}>{dropDown}</select>
//       <h3></h3>
//       <h1>{name.nome}</h1>
//       <h2>{concursos&& luck }</h2>
     
//       <h3>
//         {resultado ? resultado.numeros : <p>Aguarde o resultado</p>}

//         {/* {selected && resultado && resultado.map((r)=>{
//           return<p>{r.numeros}</p>
//         }) */}
//         {/* } */}
//       </h3> 
//       <h2>{resultado && resultado.data}</h2>
//     </MainDiv>
//   );
// };

export default HomePage;
