import styled from "styled-components"

export const ContainerHeader = styled.div`
border:1px solid black;
display:grid;
grid-template-columns:3%, 94%, 3%;
grid-template-rows: repeat(3,1fr);
height:20%;
width:auto;

@media screen  and (max-device-width : 667px){
     display:flex;
     flex-direction: column;
     padding:0;
     height:auto;
}
   

/* @keyframes bounce {
    0%, 20%, 60%, 100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
    }
    40% {
        -webkit-transform: translateY(-20px);
        transform: translateY (-20px);
    }
    80% {
        -webkit-transform: translateY(-10px);
        transform: translateY(-10px);
    }
} */

.NameLogo{
    color:blue;
    grid-column:2/3;
    grid-row:1/2;
    margin:0;
    cursor: pointer;

}

.ButtonBack{
    background-color: white;
    border-radius: 10px;
    grid-column: 1/2;
    grid-row:3/4;
    margin:0;
    /* width:150px; */
}

/* .ButtonBack:hover{
    animation: bounce 2s;
} */

.LoginAdm{
grid-column:3/4;
grid-row:2/3;
/* width:150px; */
border-radius: 10px;
background-color: lightskyblue;
/* transform-style: preserve-3d; */
/* padding:10px; */
/* width: 200px; */
}
/* .LoginAdm:after{
top: -100%;
left: 0px;
width:100%;
padding: 10px;
position: absolute;
background: yellow;
border-radius: 10px;
box-sizing: border-box;
content: "Login";
transform-origin: left bottom;
transform: rotateX(90deg);

} */
/* .LoginAdm:hover{
transform-origin: center bottom;
transform: rotateX(-90deg) translateY(100%);
} */
`


export const FooterContainer = styled.div`
border: 1px solid black;
bottom:0;
width:auto;
height: 20%;
`





export const Anima = styled.div `



@keyframes bounce2 {
    0%, 20%, 60%, 100% {
        -webkit-transform: translateY(0);
        transform: translateY(0px);
    }
    40% {
        -webkit-transform: translateY(-20px);
        transform: translateY (-50px);
    }
    80% {
        -webkit-transform: translateY(-10px);
        transform: translateY(-200px);
    }
}
@keyframes rotate{
    from{transform: rotateZ(0deg)};
    to {transform: rotateZ(360deg)};
}
.imagem{
    animation: rotate 12s linear infinite;
    width:300px;
}

.foguete{
    width:200px;
  
}
.foguete:hover{
      animation: bounce2 4s;
}

`
