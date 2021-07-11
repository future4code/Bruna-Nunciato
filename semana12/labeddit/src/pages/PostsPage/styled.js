import styled from 'styled-components'

export const ContainerPost = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 3px;
  gap:2rem;
  justify-content: center;
  align-items: center;
  background-color:#d694b4;
 ` 
export const Welcome = styled.img`
    margin-top: 1rem;
    width:30%;
  `
export const ContainerComments = styled.div`
    display:flex;
    justify-content: space-between;
    margin-top:3rem;
    margin-left: 4rem;
`
export const IconsContainer = styled.div`
    
`
export const HeartContainer = styled.div`
cursor: pointer;

`
export const CardPostContainer = styled.div`

.CardPost{
  width:50rem;
}

`
export const ContainerTotalVotes=styled.div`
padding-top:3rem;
display: flex;
flex-direction: row;
`
export const TargetContainer=styled.div`
display:grid;
grid-template-columns:1fr 1fr 1fr;
`
export const ContainerVotes2 = styled.div`
margin-top: 3rem;
display: flex;
flex-direction: row;
justify-content: space-evenly;
bottom:0 ;
`