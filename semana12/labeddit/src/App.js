import React, {useState} from "react"
import Routes from './routes/Routes'
import theme from './constants/theme'
import { ThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter } from 'react-router-dom'
import Header from "./components/Header/Header"

const App = () => {
  const token = localStorage.getItem("token")
  const [rightButtonText, setRightButtonText] = useState(token ? "Logout" : "Login")

  return (
    <ThemeProvider theme={theme}>
     {/* <BrowserRouter> */}
    
        <Header
        //  rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}
         /> 
             <Routes />
        {/* //  setRightButtonText={setRightButtonText} */}
         
        {/* </BrowserRouter>  */}
    </ThemeProvider>
  )
}

export default App
