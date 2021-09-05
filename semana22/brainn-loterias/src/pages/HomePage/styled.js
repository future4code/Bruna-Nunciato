import styled from "styled-components"

export const MainDiv = styled.div`
margin: 0;
padding:0;
width: 100vw;
/* text-align: center; */
height: 100vh;
/* align-content: center; */
/* vertical-align: middle; */
background: #efefef;
display: grid;
grid-template-columns: 27.3% 72.7%;
grid-template-rows: 100%;
`

export const BallsContainer = styled.div`
display:flex;
flex-direction: row;
border-radius: 100%;
background: #FFFFFF;
width: 5rem;
height:5rem;
margin: 0.3rem;
padding: 0.2rem;
align-items: center;
font-size:3rem;
/* grid-row: 3/4; */
align-items: center;
justify-content:center;
text-align: center;

`

export const AllBalls = styled.div`
grid-row: 3/4;
align-items: center;
justify-content:center;
text-align: center;
padding-left:2rem;
display: grid;
grid-template-columns: repeat(7, 1fr);
grid-template-rows: repeat(4, 1fr);
grid-column-gap: 7px;
grid-row-gap: 0px;
`
export const LeftSection=  styled.div`
grid-column: 1/2;
background-image: url(${(props) => props.color});
left: 0%;
top: 0%;
bottom: 0%;
`

export const RightSection = styled.div`
grid-column:2/3;
align-items: center;
justify-content:center;
/* vertical-align: middle; */
height: 100%;
display:flex;
flex-direction: column;
`
export const Text =styled.div`
grid-column: 2/5;
grid-row: 4/5;
`
export const SelectLotto = styled.select `
border-radius: 2px;
width: 215,91px;
height: 45,2px;

`