import React from 'react'
import Router from './route/Router'
import { GlobalState } from "./global/GlobalState";

const App = () =>{
  return(
    <>
      <GlobalState>
        <Router/>
      </GlobalState>
    </>
  )
}

export default App;
