import styled from "styled-components";

export const Home = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;
  margin: -10px;
  bottom: 0;
  box-sizing: border-box;
  align-items: center;
  background-color: #2c304b;
  padding: 0;
`;

export const LandingPageContainer = styled.div`
  border: 2px solid rgb(75, 72, 68);
  grid-column: 2/3;
  height: 450em;
  width: 280px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
`;
export const Header = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  border-bottom: 1px solid black;
  padding-bottom: 3px;
  padding-top: 3px;
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
  background-image: linear-gradient(to bottom, lightblue, rgb(175, 41, 129));
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  height: 100%;
  width: 100%;

  p {
    color: black;
  }
`;
export const TitleMatch = styled.div``;

export const SmallPhoto = styled.img`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  object-position: center;
  grid-column: 1/2;
  border: 1px solid black;
`;
export const Name = styled.div`
  font-size: 1rem;
  grid-column:2/3;
`;
export const MatchListContainer = styled.div`
  display: flex;
  flex-direction: column;
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