import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  height: 100%;
`;

export const Photo = styled.div`
  width: 100%;
  /* border-radius: 5px; */
  height: 100%;
  /* border-radius: 5px; */
   background: url(${(prop) => prop.src});
  background-position: top;
  border: 2;
  background-repeat: no-repeat;
  background-size: 100% 79%;
  display:flex;
  flex-direction: column;
  cursor: pointer;
`;
export const CardLoading = styled.div` 
height:100%;
`
export const PhotoProfile = styled.div`
width:100%;
height:100%;
`
    

export const Text = styled.div`
  width: 22rem;
  grid-row: 3/4;
  text-align: center;
  font-size: 1.2rem;
  margin:0;
`;

export const Name = styled.p`
  width: 270px;
  display: flex;
  position: absolute;
  font-size: 21px;
  left: 18px;
  top: 280px;
`;
export const Age = styled.p`
  text-align: left;
  width: 27rem;
  display: flex;
  grid-row: 2/3;
  padding: 0.01rem 1.8rem ;
  font-size: 1.6rem;
  color: black;
  -webkit-text-stroke-width: 0.9px;
  -webkit-text-stroke-color: white;
  margin-bottom:-3px;
`;
