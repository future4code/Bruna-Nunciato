import styled from "styled-components";

export const ErrorContainer = styled.div`
  height: 100%;
`;

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;

  .BodyHomeContainer {
    margin-top: 20%;
    margin-bottom: 20%;
    width: 100%;
    height: 100%;
    align-content: center;
    vertical-align: middle;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: url(${(prop) => prop.src});

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
`;

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
`;
export const TripsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;

  .BodyTripsContainder {
    display: flex;
    width: 100%;
    height: 100%;
  }
  .TopContainer {
  }
  h3 {
    text-align: center;
    margin-top: 0;
  }
  button {
    width: auto;
    height: auto;
  }
  .Showcase {
    height: auto;
    width: auto;
    margin: 0;
    padding: 1rem;
    border: 2px solid red;
  }
  .CardTrips {
    background-color: lightgray;
    width: 15rem;
    height: 14rem;
    margin: 1rem;
    padding: 2rem;
    border-radius: 9px;
    color: purple;
    text-align: left;
  }

  .CardTrips {
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
`;
export const TripDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;

  .TripDetailBodyContainer {
    width: 100%;
    height: 100%;
  }
  .Card {
    margin: auto;

    flex-direction: column;
    border: 1px solid black;
    padding: 3rem;
    width: 60%;
    background-color: lightgray;
    border-radius: 9px;
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
