import React, { useContext } from 'react'
import PageNumber from '../hooks/pageNumber'
import {GlobalStateContext} from '../globalstate/GlobalStateContext'
import {PaginationContainer} from './styled'

function Pagination() {
    const {setPage} = useContext(GlobalStateContext)
    const number = PageNumber()
    const pageList = []
    if(number){
        for(let i = 1;i < number;i++){
            pageList.push(<button onClick = {() => setPage(i)}>{i}</button>)
            }
    }
    return<PaginationContainer>
        {pageList}
    </PaginationContainer>
}

export default Pagination