import styled from "styled-components";

export const ErrorContainer = styled.div`
  height: 100%;
`;

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: darkblue;

  .BodyHomeContainer {
      width: 100%;
    height: 100%;
    align-content: center;
    vertical-align: middle;
    display: flex;
    justify-content:center;
     align-items: center;
    background-position: center;
    background-size: 100%;
  }

  .TripsUser {
    border-radius: 100%;
    background-color: yellow;
    font-size: 20px;
    height: 150px;
    width: 150px;
    cursor: pointer;
  }


}
@keyframes rotate{
    from{transform: rotateZ(0deg)};
    to {transform: rotateZ(360deg)};
}
img{
    animation: rotate 12s linear infinite;
 width: 32em;
 }



.BodyHomeContainer button {
    position:absolute;
    top:51.5%;
    left:50.3%;
    width:12rem;
    height:12rem;
    border:5px solid yellow;
    border-radius:100px;
    background:rgba(255, 255, 255, 0.2);
    -webkit-transform:translate3d(-50%, -50%, 0);
    -moz-transform:translate3d(-50%, -50%, 0);
    transform:translate3d(-50%, -50%, 0);
}


.BodyHomeContainer button:hover, .BodyHomeContainer button:after:hover {
    box-shadow:0 0 0 4px rgba(150, 150, 100, 0.7);
}
@media screen and (max-device-width: 640px) {
  .BodyHomeContainer button {
    top:54%;
    width:7.5rem;
    height:7.5rem;
  }
  img{
 width: 20rem;
 }

`

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;

  .BodyLoginContainer {
    width: 100%;
    height: 100%;
  }
  .LoginContainer {
    margin: auto;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    width: 45%;
    padding: 3rem;
    margin-top: 5%;
  }
  @media screen and (max-device-width: 667px) {
    .LoginContainer { padding:1;
        width: 15rem;
     margin-bottom:0;   
    }
    h1{
        font-size:1.5rem;
    }
  }
`

export const TripsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: black;

  .BodyTripsContainder {
    display: flex;
    width: 100%;
    height: 100%;
  }
  .TopContainer {
 display: grid;
 grid-template-columns: repeat(3,1fr);
 grid-template-rows: repeat(2,1fr);
 /* height: 4rem; */
  }
  h1 {
    grid-column:2/3;
    grid-row: 1/2;
   
    text-align: center;
    margin-top: 0;
  }
  button {
    grid-column:2/3;
    grid-row: 2/3;
    width: auto;
    height: auto;
  }
  .foguet1{
    grid-column:1/2;
    grid-row: 3/4;
   
  }
  .foguet2{
    grid-column:3/4;
    grid-row: 3/4;

  }
  img{
    width: 4rem;
    position:absolute;
  }



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


.foguete1 .foguete2{
    width:200px;
  
}
.foguete1:hover{
      animation: bounce2 4s;
}
.foguete2:hover{
      animation: bounce2 4s;
}




  .Showcase {
    height: auto;
    width: 100%;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: black;

  }
  .CardTrips {
    background-color: lightgray;
    width: 15rem;
    margin: 1rem;
    padding: 2rem;
    border-radius: 9px;
    color: purple;
    text-align: left;
    height: auto;
  }

 
  @media screen and (max-device-width: 667px) {
    display: flex;
    flex-direction: column;
    padding: 0em;
    height: auto;
  }
`;

export const ApplicationContainer = styled.div`
  .select {
    width: 40%;
    min-width: 200px;
    background-color: black;
  }
  .BodyApplicationContainer {

  }

  @media screen and (max-device-width: 667px) {
    display: flex;
    flex-direction: column;
    padding: 0em;
    height: auto;
    h1 {
      font-size: 1.5rem;
    }
  }
`
export const TripDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: black;


  .TripDetailBodyContainer {
    width: 100%;
    height: 100%;
    display: flex;
  }
  .Card {
    margin: auto;
    flex-direction: column;
    border: 1px solid black;
    padding: 3rem;
    width: 60%;
    background-color: lightgray;
    border-radius: 9px;
    color:blue;
  }
  .CardContent {
    display: grid;
    grid-template-columns: 1fr, 1fr, 1fr;
    grid-template-rows: 1fr, 1fr;
    gap: 0.06rem;
    padding-bottom: 2rem;
  }

  .planet {
    grid-column: 1/2;
    grid-row: 1/2;
    text-align: left;
  }
  .duration {
    grid-column: 2/3;
    grid-row: 1/2;
    text-align: left;
  }
  .date {
    grid-column: 3/4;
    grid-row: 1/2;
    text-align: left;
  }
  .description {
    grid-column: 1/4;
    grid-row: 2/3;
    text-align: left;
  }
`;

export const HomeAdmContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;


  .HomeAdmBodyContainer {
    margin-top: 2%;
    margin-bottom: 2%;
    width: 100%;
    height: 100%;
    align-content: center;
    vertical-align: middle;
  }
  .CardTrips {
    background-color: lightgray;
    width: 16rem;
    height: auto;
    margin: 1rem;
    padding: 2rem;
    border-radius: 9px;
    color: purple;
    text-align: left;
  }
  .Title{
    display:flex;
    justify-content: space-between;

  }
  .Showcase{
    height: auto;
    width: 100%;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap:2rem;
    background-color: black;
  }
`;

export const CreateTripContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  .formCreate {
    width: 40%;
    min-width: 200px;
  }
  .formDrescription {
    width: 40%;
    min-width: 200px;
  }

  .BodyCreateContainer {
    margin-top: 2%;
    margin-bottom: 2%;
    width: 100%;
    height: 100%;
    align-content: center;
    vertical-align: middle;
    border: 1 px solid black;
  }
`;
export const ToApproveContainer = styled.div`
  display: flex;
  align-content: center;
  flex-direction: row;
  background-color: black;

  .cardCandidate {
    background-color: lightgray;
    width: 16rem;
    height: auto;
    margin: 1rem;
    padding: 2rem;
    border-radius: 9px;
    color: purple;
    text-align: left;
  }
  @media screen and (max-device-width: 667px) {
    display: flex;
    flex-direction: column;
    padding: 0em;
    height: auto;
  }
`;
