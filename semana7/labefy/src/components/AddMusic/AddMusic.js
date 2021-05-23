import React from 'react';
import axios from 'axios';



export default class AddMusic extends React.Component {
    state = {
        url:"",
        music:"",
        artist:"",
    }



handleClickEnter = (event) => {
  if (event.keyCode === 13) {
    this.createMusicList();
  }
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
         //nome da PlayList

        const playListNameStyle = this.props.playlists.map((playlist) => {
            if(playlist.id === this.props.id){
              return <div className="NomeEstilizado"> <p>{playlist.name}</p>
                </div>
              };
          })

        console.log(this.props.playlists)
        return(
            <div className="AdicionaMusicas">
            <div className="divNomePlay">
              {playListNameStyle}
              </div>
           
            <input
            placeholder={"Nome da Música"}
          value={this.state.music}
          onChange={this.handleMusic}
        />
        <input
          placeholder={"Artista"}
          value={this.state.artist}
          onChange={this.handleArtist}
        />
        <input
          placeholder={"Url Link "}
          onKeyDown={this.handleUrlEnter}
          value={this.state.url}
          onChange={this.handleUrl}
          onKeyDown={this.handleClickEnter}
        />
        <button onClick={this.createMusicList}>Adicionar à esta PlayList</button>
        </div>
        )
    }
}