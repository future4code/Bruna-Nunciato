import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { InputsContainer, SignUpFormContainer } from './styled'
import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import {signUp} from "../../services/access"
import CircularProgress from '@material-ui/core/CircularProgress'

const SignUpForm = ({setRightButtonText}) => {
  const history = useHistory()
  const [form, onChange, clear] = useForm({ username: '', email: '', password: '' })
  const [isLoading, setIsLoading] = useState(false)

  const onSubmitForm = (event) => {
    event.preventDefault()
    signUp(form, clear, history, setRightButtonText, setIsLoading)
  }

  return (
    <form onSubmit={onSubmitForm}>{console.log(form)}
      <SignUpFormContainer>
        <InputsContainer>
          <TextField
            value={form.username}
            name={'username'}
            onChange={onChange}
            label={'Usuário'}
            variant={'outlined'}
            fullWidth
            required
            autoFocus
            margin={'normal'}
          />
          <TextField
            value={form.email}
            name={'email'}
            onChange={onChange}
            label={'E-mail'}
            variant={'outlined'}
            type={'email'}
            fullWidth
            required
            margin={'normal'}
          />
          <TextField
            value={form.password}
            name={'password'}
            onChange={onChange}
            label={'Senha'}
            variant={'outlined'}
            type={'password'}
            pattern={"^.{8,}"}
            title={"sua senha precisa ser de no mínimo 8 caracteres"}
            fullWidth
            required
            margin={'normal'}
          />
        </InputsContainer>
        <Button
          color={'primary'}
          variant={'contained'}
          type={'submit'}
          fullWidth
        >
          {isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Fazer Cadastro</>}
        </Button>
      </SignUpFormContainer>
    </form>
  )
}

export default SignUpForm