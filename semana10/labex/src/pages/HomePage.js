import React from 'react'
import { HomeContainer } from './styledPages'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Sistema from '../img/system.png'
import {useHistory } from 'react-router-dom'

export default function HomePage (){
    const history = useHistory()

    const goTrips = () =>{
        history.push("/viagens")
    }

    return(
        <HomeContainer>
            <Header />
            <div className="BodyHomeContainer" src={Sistema}>
        <button onClick={goTrips} className="TripsUser">Viagens</button>
         </div>
         <Footer/>
         </HomeContainer>
    )
}