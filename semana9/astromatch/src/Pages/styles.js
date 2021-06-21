import styled from "styled-components";

export const Home = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;
  margin: 0;
  bottom: 0;
  box-sizing: border-box;
  align-items: center;
  background-color: #2c304b;
  padding: 0;
  border-top-left-radius: 25px;
border-top-right-radius: 25px;
`;

export const LandingPageContainer = styled.div`
  border: 2px solid rgb(75, 72, 68);
  grid-column: 2/3;
  height: 100em;
  width: 24em;
  background-color: white;
  border-top-left-radius: 2em;
  border-top-right-radius: 2em;
  border-bottom-left-radius: 2em;
  border-bottom-right-radius: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Header = styled.div`
  height: 4em;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  border-bottom: 1px solid  rgb(75, 72, 68);
  padding: 0.5rem;
  
 
`;
export const Logo = styled.div`
  display: flex;
  font-size: 2em;
  color: white;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: pink;
`;

export const MatchContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  background-image: linear-gradient(to bottom, rgb(175, 41, 129) , lightblue);
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  height: 100%;
  width: 100%;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  

  p {
    color: black;
  }
`;
export const CardList = styled.div`
 width:100%;
  height: 100%;
  display:flex;
  flex-direction:column;

  
  `;
  export const SeusMatches = styled.div`
  height: 100%;
  `

export const TitleMatch = styled.div`
font-size: 28px;
`

export const SmallPhoto = styled.img`
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  object-position: center;
  grid-column: 1/2;
  border: 1px solid black;
`;
export const Name = styled.div`
  padding-top:0.5rem;
  font-size: 1.5rem;
  grid-column:2/3;
`;
export const MatchListContainer = styled.div`
 
`;

export const ListContainer = styled.div`
  margin: 10px;
  display: grid;
grid-template-columns: 1fr, 1fr;
`;
export const Cupido = styled.img`
  width: 60px;
  height: auto;
`;
export const Space = styled.div`
  width: 10px;
`;