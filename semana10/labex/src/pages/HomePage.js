import React from 'react'
import { HomeContainer } from './styledPages'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Sistema from '../img/system.png'

export default function HomePage (){

    return(
        <HomeContainer>
            <Header />
            <div className="BodyHomeContainer" src={Sistema}>
        <button className="TripsUser">Viagens</button>
         </div>
         <Footer/>
         </HomeContainer>
    )
}