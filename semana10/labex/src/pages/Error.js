import React from 'react'
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header'
import ErrorImage from '../img/404.gif'
import { ErrorContainer } from './styledPages';

const Error = () => {
    return(        
        <ErrorContainer> 
            <Header />
            <img height="auto" src={ErrorImage} />
            <Footer />
        </ErrorContainer>
    )
}
export default Error;