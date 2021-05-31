import React from 'react';
import './App.css';
import axios from 'axios';


 const Base = "https://us-central1-labenu-apis.cloudfunctions.net/labefy"
 const headers ={
    header: "bruna-nunciato-paiva"
  }


  export default class App extends React.Component {
  state = {
    lists :[],
  }

  componentDidMount() {
    this.getPlayLists();
  }

  getPlayLists (){
   axios .get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks`,headers)
   .then ((res)=>{
     console.log(res)
   })
   .catch ((erro)=>{
     console.log(erro)
   })
  }
  
  render() {
 
    return (
  
    <div className="App">

    </div>

    )
    
  }
}