import styled from "styled-components";

export const HomeContainer = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
width: 100vw;


.BodyHomeContainer{
    margin-top: 20%; 
    margin-bottom:20%;
width:100%;
height:100%;
align-content: center;
vertical-align: middle;
/* display: flex; */
flex-direction: row;
justify-content: center;
align-items: center;
background: url(${(prop) => prop.src});

/* background-size:cover;
background-size: auto 860px; */
background-position: center;
/* background-repeat: no-repeat; */
background-size: 100%;


}
.TripsUser{
    border-radius:100%;
    background-color:yellow;
    font-size: 20px;
    height: 150px;
    width: 150px;
}
`

export const LoginContainer = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
width: 100vw;
/* display: flex;
flex-direction: column;
height: 100vh;
width: 100vw;
align-content: center;
text-align: center;
margin: auto; */

button{
    margin:20px;
}
.BodyLoginContainer{
    width:100%;
height:100%;
    /* text-align: center;
    display:flex;
    margin-top: 20%; 
    margin-bottom:20%;
    width:60%;
    height:45%;
   
    text-align: center;
    padding: 1rem; */
}
.LoginContainer{
    margin:auto;
    display: flex;
    flex-direction: column;
     border: 1px solid black;
     width: 45%;
     padding:3rem;
     margin-top:5%;

}



`
export const TripsContainer = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
width: 100vw;

.BodyTripsContainder{
   display:flex;
    width:100%;
    height:100%;
}
.TopContainer{

    
}
button{
    width: auto;
    height:auto;
}
.Showcase{
    margin:0;
    display: grid;
    grid-template-columns: 1fr,1fr;
    grid-template-rows:1fr,1fr;
     border: 1px solid black;
     padding:1rem;
     margin:5%;
     gap:10px;
  }
.CardTrips{ 
    background-color:black;
    width: 9em;
    height: 16rem;
    margin:0;
    padding: 5rem;
    border-radius: 9px;
    }
    
@media screen  and (max-device-width : 667px){

     display:flex;
     flex-direction: column;
     padding:0em;
     height:auto;
}
.Showcase{
    display: grid;
    grid-template-columns: 1fr,1fr;
}
`
