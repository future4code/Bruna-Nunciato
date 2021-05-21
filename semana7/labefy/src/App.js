import React from 'react';
import './App.css';
import axios from 'axios';
import AddMusic from './componenents/AddMusic/AddMusic';



const BASE_URL =
  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

const header = {
  headers: {
  Authorization: "bruna-nunciato-paiva"
  }
}

export default class App extends React.Component {
  state = {
    playlists: [],
    nomePlayList: "",
    musicList: [],
    idPlayListSelect: "",
    playListSelect:"",
   
  };

  //aparecer lista
  componentDidMount() {
    this.getPlaylists();
  }
  // componentDidUpdate() {
  //   this.getPlaylists();
  //   this.visualizarPlayList();
  // }

  //adicionar no input nome da playlist
  handleName = (event) => {
    this.setState({ nomePlayList: event.target.value });
  };
//botao enviar no input
  handleClickEnter = (event) => {
    if (event.keyCode === 13) {
      this.createPlaylist();
    }
  };
// trazer playlist
  getPlaylists = () => {
    axios
      .get(BASE_URL, header)
      .then((res) => {
        this.setState({ playlists: res.data.result.list });
      })
      .catch((err) => {
        alert(err.response.data);
      });
  };
//criar playlist
createPlaylist = () => {
  const body = {
    name: this.state.nomePlayList
  };

  axios
  .post(BASE_URL, body, header)
  .then(() => {
  alert("Playlist adicionada com sucesso");
  this.setState({ nomePlayList: "" });
  this.getPlaylists();
  })
  .catch((erro) => {
    console.log(erro.response.message)
    if (
    erro.response.data.message === "There already is a playlist with a similiar name."
        ) {
          alert("Essa PlayList já existe. Tente outro nome");
        }
      });
  };

//deletar Musica
deleteMusic =(id)=>{
  const idPlayList = this.state.idPlayListSelect
  axios
  .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${idPlayList}/tracks/${id}`, header)
  .then((res)=>{
    alert("Música removida da Playlist")
    this.visualizarPlayList();
  })
  .catch((erro)=>{
    console.log(this.state.idPlayListSelect)
    console.log(erro.response.data.message)
  })
}

//deletar Playlist
deletePlaylist = (id) =>{
  axios
  .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`, header)
  .then((res)=>{
    alert("PlayList deletada")
    this.getPlaylists();
  })
  .catch((erro)=>{
    console.log(erro)
  })
}
// abrir playlist
visualizarPlayList = (id) =>{
  axios
  .get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`, header)
  .then((res)=>{
    this.setState({musicList: res.data.result.tracks})
    console.log(res)

    // console.log(`id`,this.state.idPlayListSelect)
})
  .catch((erro)=>{
    console.log(erro)
  })
  this.setState({idPlayListSelect: id})
 
}

  render() {
    console.log(`nome da playlist`,this.state.playlists)

    console.log(`idplaylist`,this.state.idPlayListSelect)

    const Allplaylists= this.state.playlists.map((play) => {
      return( <div className="listinha"><div className="bloco">
        <button key={play.id} onClick={()=>this.visualizarPlayList(play.id)}>{play.name}</button>
      <button key="del{play.id}" onClick={()=>this.deletePlaylist(play.id)}>X</button>
      </div> 
      </div>        
       )
    });

      const musicList = this.state.musicList.map((music)=>{
      return <div className="musicas">
        <div className="ordemMusica">
          <p>Nome: &nbsp; &nbsp;{music.name}</p>
          <p>Artista: &nbsp; &nbsp;{music.artist}</p>
          <p><a target="_blank" href={music.url}>Clique para escutar esta Música</a></p>
          <button key="del{music.id}" onClick={()=>this.deleteMusic(music.id)}>X</button>
        </div>
      </div>
    })


    return (
        <div>
        <h1>Labefy </h1>
        <input
        placeholder={"Nova Playlist"}
          onKeyDown={this.handleClickEnter}
          value={this.state.nomePlayList}
          onChange={this.handleName}
        />
        <button onClick={this.createPlaylist}>Adicionar</button>
        <hr />
        {Allplaylists}
        <hr/>
        {this.state.idPlayListSelect && (
        <AddMusic
        id={this.state.idPlayListSelect}
        playListSelect={this.state.idplayListSelect}
       
        />)}
        <hr/>
        {musicList}
        <hr/>
        <div className="player">
          
        </div>
               
        </div>
    );
  }
}
