import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  height: 100%;
`;

export const Photo = styled.div`
  width: 17.5em;
  border-radius: 5px;
  height: 100%;
  background-size: 100%;
  border-radius: 5px;
  cursor: pointer;
`;

export const Text = styled.div`
  width: 255px;
  text-align: left;
  display: flex;
  position: absolute;
  font-size: 18px;
  left: 23.2em;
  top: 20em;
  -webkit-text-stroke-width: 0.3px;
  -webkit-text-stroke-color: black;
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
  width: 270px;
  display: flex;
  position: absolute;
  font-size: 25px;
  left: 16.8em;
  top: 12.8em;
  color: black;
`;
