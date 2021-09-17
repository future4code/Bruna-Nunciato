import styled from 'styled-components'

export const DataContainer = styled.div`
display: flex;
flex-direction: row;
@media screen  and (max-device-width : 667px){
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
}
`