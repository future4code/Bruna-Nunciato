import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { InputsContainer, CreatePostContainer, ContainerButton } from './styled'
import useForm from '../../hooks/useForm'
import CircularProgress from '@material-ui/core/CircularProgress'
import { createPost } from '../../services/posts'
import Card from '@material-ui/core/Card'

const DoPost = () => {
  const [form, onChange, clear] = useForm({ title:"" , body: "" })
  const [isLoading, setIsLoading] = useState(false)

  const onSubmitComment = (event) => {
    event.preventDefault()
    createPost(form, clear, setIsLoading)
  }

  return (
    
    <form onSubmit={onSubmitComment}><Card width="200">
      <CreatePostContainer>
        <InputsContainer>
          <TextField
            name={"title"}
            value={form.title}
            onChange={onChange}
            label={'Título'}
            variant={'outlined'}
            fullWidth
            required
            autoFocus
            margin={'normal'}
          />
        </InputsContainer>
        <InputsContainer>
          <TextField
            name={"body"}
            value={form.body}
            onChange={onChange}
            label={'Texto'}
            variant={'outlined'}
            fullWidth
            required
            autoFocus
            margin={'normal'}
          />
        </InputsContainer>
        <ContainerButton>
        <Button
          color={'primary'}
          variant={'contained'}
          type={'submit'}
          fullWidth
        >
          {isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Comentar</>}
        </Button>
        </ContainerButton>
      </CreatePostContainer>
    </Card></form>
    
  )
}

export default DoPost
