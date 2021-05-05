import React from 'react';
import styled from "styled-components";

const SmallcardContainer = styled.div` 
   display: flex;
    align-items:center;
    border: 1px solid black;
    padding: 15px 30px;
    margin: 10px auto;
    background-color: rgba(17, 52, 80, 0.432);
    
   
div {
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
   }
    
img {
    width: 40px;
    margin-right: 10px;
    border-radius: 50%;
    background-color:white;
}
h4 {
    margin-bottom: 15px;
}`


function CardPequeno(props) {
    return (
        <SmallcardContainer>
            <img src={ props.imagem } />
            <div>
                <h5>{ props.info }</h5>
                <>{props.contato}</>
            </div>   
            </SmallcardContainer>
       
    )
}

export default CardPequeno;