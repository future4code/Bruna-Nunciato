import React from 'react'
import Router from './route/Router'
import { GlobalState } from "./global/GlobalState";

const App = () =>{
  return(
    <div className="AppContainer">
      <GlobalState>
        <Router/>
      </GlobalState>
    </div>
  )
}

export default App;
