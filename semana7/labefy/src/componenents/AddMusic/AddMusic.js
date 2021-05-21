import React from 'react';
// import './App.css';
import axios from 'axios';
// import { render } from '@testing-library/react';


export default class AddMusic extends React.Component {
    state = {
        url:"",
        music:"",
        artist:"",
    }


handleMusic = (event) => {
  this.setState({ music: event.target.value });
};

handleArtist = (event) => {
  this.setState({ artist: event.target.value });
};

handleUrl = (event) => {
  this.setState({ url: event.target.value });
};

createMusicList =() =>{
  const body ={
    name: this.state.music,
    artist: this.state.artist,
    url: this.state.url,
  }

  const header = {
    headers: {
    Authorization: "bruna-nunciato-paiva"
    }
  }
  axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks`,body ,header)
  .then((res)=>{
    console.log(res)
    alert(`Música adicionada com sucesso !`);
    this.setState({ url: ""});
    this.setState({ music: ""});
    this.setState({ artist: ""});
     
  })
  .catch((erro)=>{
    console.log(erro)
  })
}
    render(){
        return(
            <div className="AdicionaMusicas">
            
            <input
            placeholder={"Nome da Música"}
          value={this.state.music}
          onChange={this.handleMusic}
        />
        <input
          placeholder={"Artísta"}
          value={this.state.artist}
          onChange={this.handleArtist}
        />
        <input
          placeholder={"Url Link "}
          onKeyDown={this.handleUrlEnter}
          value={this.state.url}
          onChange={this.handleUrl}
        />
        <button onClick={this.createMusicList}> Enviar</button>
        </div>
        )
    }
}