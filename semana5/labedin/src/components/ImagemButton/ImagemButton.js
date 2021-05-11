import React from 'react';
import styled from "styled-components";

const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 50px;
    width: 200px;
    padding: 15px 30px;
    margin: 10px auto;
    background-color: rgba(17, 52, 80, 0.432);

img {
    width: 30px;
    margin-right: 10px;
    
}`



function ImagemButton(props) {
    return (
        <ImageContainer>
            <img src={ props.imagem }/>
            <p>{ props.texto }</p>
        </ImageContainer>

    )
}

export default ImagemButton;