import styled from "styled-components"

export const ContainerHeader = styled.div`
display:grid;
grid-template-columns: repeat(3,1fr);
grid-template-rows: repeat(2,1fr);
height:10%;
width:auto;
background:  rgba(18,20,0,0.8);



.NameLogo{
    color:whitesmoke;
    grid-column:2/3;
    grid-row:1/3;
    margin:0;
    cursor: pointer;

}

.ButtonBack{

    grid-column: 1/2;
    grid-row:3/4;
    width:8rem;

}



.LoginAdm{
grid-column:3/4;
grid-row:2/3;
/* width:150px; */
border-radius: 10px;
}
`


export const FooterContainer = styled.div`
bottom:0;
width:auto;
height: 10%;
background:  rgba(18,20,0,0.8);
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
