import React from 'react';
import styled from "styled-components";

const BigcardContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: auto;
    background-color: rgba(17, 52, 80, 0.432);

    div {
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
    
} 
    img {
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
    
}

.bigcard-container h4 {
    margin-bottom: 15px;
}
` 

function CardGrande(props) {
    return (
        <BigcardContainer>
            <img src={ props.imagem } />
            <div>
                <h4>{ props.nome }</h4>
                <h6>{ props.cargo }</h6>
                <p>{ props.descricao }</p>
            </div>
        </BigcardContainer>
    )
}

export default CardGrande;