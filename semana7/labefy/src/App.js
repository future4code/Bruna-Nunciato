import React from "react";
import "./App.css";
import axios from "axios";
import AddMusic from "./components/AddMusic/AddMusic";
import PandaLove from "./pandaLove.gif";
import playMusic from "./playmusic.gif";

const BASE_URL =
  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

const header = {
  headers: {
    Authorization: "bruna-nunciato-paiva",
  },
};

export default class App extends React.Component {
  state = {
    playlists: [],
    nomePlayList: "",
    musicList: [],
    idPlayListSelect: "",
    playListSelect: "",
    urlMusicSelect: "",
    clickAparecerPL: false,
    botaoVoltar: true,
    linkParaPlayer: ""
  };

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
      name: this.state.nomePlayList,
    };

    axios
      .post(BASE_URL, body, header)
      .then(() => {
        alert("Playlist adicionada com sucesso");
        this.setState({ nomePlayList: "" });
        this.getPlaylists();
      })
      .catch((erro) => {
        console.log(erro.response.message);
        if (
          erro.response.data.message ===
          "There already is a playlist with a similiar name."
        ) {
          alert("Essa PlayList já existe. Tente outro nome");
        }
      });
  };

  //deletar Musica
  deleteMusic = (id) => {
    if (window.confirm("Deseja remover esta música?")) {
      const idPlayList = this.state.idPlayListSelect;
      axios
        .delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${idPlayList}/tracks/${id}`,
          header
        )
        .then((res) => {
          alert("Música removida da Playlist");
          this.visualizarPlayList();
        })
        .catch((erro) => {
          console.log(this.state.idPlayListSelect);
          console.log(erro.response.data.message);
        });
      this.setState({ idMusicSelect: id });
    }
  };

  //deletar Playlist
  deletePlaylist = (id) => {
    if (window.confirm("Deseja remover esta Playlist?")) {
      axios
        .delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,
          header
        )
        .then((res) => {
          alert("PlayList deletada");
          this.getPlaylists();
        })
        .catch((erro) => {
          console.log(erro);
        });
    }
  };

  // abrir playlist
  visualizarPlayList = (id) => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,
        header
      )
      .then((res) => {
        this.setState({ musicList: res.data.result.tracks });
        this.setState({ clickAparecerPL: false });
        this.setState({ botaoVoltar: true });
      })
      .catch((erro) => {
        console.log(erro);
      });
    this.setState({ idPlayListSelect: id });
  };

  //tocar musica
  playMusic = (url) => {
    this.setState({ urlMusicSelect: url });

  const linkPlayer = url.slice(32)
  const link = "https://www.youtube.com/embed/"
  const linkpronto = link+linkPlayer
  console.log(`linkpronto`,linkpronto)
  this.setState({linkParaPlayer: linkpronto})

  };

  onclickVoltar = () => {
    this.setState({ botaoVoltar: true });
  };

  OnClickAll = () => {
    this.setState({ clickAparecerPL: true });
    this.setState({ botaoVoltar: false });
    this.getPlaylists()
  };

 
  render() {
   

    const Allplaylists = this.state.playlists.map((play) => {
      return (
        <div className="listinha">
          <div className="bloco">
            <p
              className="NomeDaPlayList"
              key={play.id}
              onClick={() => this.visualizarPlayList(play.id)}
            >
              {play.name}
            </p>
            <button
              className="botaoPlaylist"
              key="del{play.id}"
              onClick={() => this.deletePlaylist(play.id)}> X </button>
          </div>
        </div>
      );
    });

    //lista de musicas da playlist selecionada
    const musicList = this.state.musicList.map((music) => {
      return (
        <div className="musicas">
          <div className="ordemMusica">
            <p>Nome: &nbsp; &nbsp;{music.name}</p>
            <p>Artista: &nbsp; &nbsp;{music.artist}</p>
            <p>
              <a target="_blank" href={music.url}>
                Link externo para esta Música
              </a>
            </p>
            <button
              key="del{music.id}"
              onClick={() => this.deleteMusic(music.id)}
            >
              X
            </button>
            <button
              key="ms{music.id}"
              onClick={() => this.playMusic(music.url)}
            >
              Play ===
            </button>
          </div>
          </div>
      );
    });

    return (
      <div className="MainContainer">
        <div className="labefy">Labefy <img className="imagemusical" src={playMusic}/>
        </div>
        <input
          placeholder={"Nova Playlist"}
          onKeyDown={this.handleClickEnter}
          value={this.state.nomePlayList}
          onChange={this.handleName}
        />
        <button onClick={this.createPlaylist}>Adicionar</button>
        <hr />
        <div className="listinha">
          {this.state.clickAparecerPL && (
            <div className="coluninha"> {Allplaylists} </div>
          )}
        </div>

        <div className="Voltar">
          {this.state.botaoVoltar && (
            <button onClick={this.OnClickAll}>Mostrar todas Playlists</button>
          )}
        </div>
        {/* //se playlist é selecionada, mostrar opção de adicionar playlist e as musicas da playlist */}
        {this.state.idPlayListSelect && (
          <AddMusic
            id={this.state.idPlayListSelect}
            playListSelect={this.state.idplayListSelect}
            playlists={this.state.playlists}
          
          />
        )}
        <hr />
        <div className="Grid">
        {!this.state.idPlayListSelect && (<img className="PandaImage" src={PandaLove}/>)}
        {musicList}
                    
       <div className="Player">
        {this.state.linkParaPlayer && (
          <iframe
            width="260"
            height="165"
          src={'"',this.state.linkParaPlayer,'"'}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        )}
        </div>
        </div>
      </div>
    );
  }
}
