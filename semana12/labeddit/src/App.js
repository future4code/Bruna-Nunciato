import React, {useState} from "react"
import Router from './routes/Router'
import theme from './constants/theme'
import { ThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter } from 'react-router-dom'
import Header from "./components/Header/Header"
import GlobalState from './globalstate/GlobalState'


const App = () => {
  const token = localStorage.getItem("token")
  const [rightButtonText, setRightButtonText] = useState(token ? "Logout" : "Login")

  return (
    <ThemeProvider theme={theme}>
        <BrowserRouter>    
        <GlobalState>
          <Header rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}  /> 
          {/* <Menu/> */}
          <Router setRightButtonText={setRightButtonText} />
       </GlobalState>
       </BrowserRouter> 
    </ThemeProvider>
  )
}
export default App