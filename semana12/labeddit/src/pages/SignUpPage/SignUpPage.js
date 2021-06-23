import React from 'react'
import logo from '../../assets/logo.png'
import { ScreenContainer } from './styled'
import SignUpForm from './SignUpForm'
import { LogoImage } from './styled'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'

const SignUpPage = ({setRightButtonText}) => {
  useUnprotectedPage()
  return (
    <ScreenContainer>
      <LogoImage src={logo}/>
      <h1>Solte-se, sua voz em palavras!</h1>
      <SignUpForm setRightButtonText={setRightButtonText}/>
    </ScreenContainer>
  )
}

export default SignUpPage