import axios from "axios";
import React from "react";
import "./App.css";

export default class App extends React.Component {
  state = {
    pokemons: [],
    picture: ""
  };

  componentDidMount() {
    this.getPokemons();
  }

  getPokemons = async () => {
    try {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=100&offset=50"
      );
      this.setState({ pokemons: response.data.results });
    } catch (erro) {
      console.log(erro);
    }
  };

  getPokePicture = async (event) => {
   
    try {
      const url = event.target.value;
      const response = await axios.get(`${url}`);
      this.setState({ picture: response.data.sprites.front_default });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
     const pokeList = this.state.pokemons.map((poke) => {
      return (
        <option key={poke.name} value={poke.url}>
          {poke.name}
        </option>
      );
    });
    return (
      <div className="App">
        <h1>Pokemons</h1>
        <select onChange={this.getPokePicture}>
          <option>Selecione um pokemon</option>
          {pokeList}
        </select>

        
        {this.state.picture && (
          <div className="pokedex">
            <img src={this.state.picture} alt="pokemon" />
          </div>  
        )}
      </div>
      
    );
  }
}
