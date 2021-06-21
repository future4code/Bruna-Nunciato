import React, { useState } from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'

function Post  (props) {

  const [Curtido, setCurtido]= useState(false)
  const [NumeroCurtidas, setNumeroCurtidas] = useState(0)
  const [Comentando, setComentando] = useState(false)
  const [NumeroComentarios, setNumeroComentarios] = useState (0)
  const [Comentarios, setComentarios] = useState([])
  
  const onClickCurtida = () => {
    if(Curtido){
      setCurtido(!Curtido)
      setNumeroCurtidas(0)
    } else {
      setCurtido(!Curtido)
      setNumeroCurtidas(+1)
    }
  };

  const onClickComentario = () => {
    setComentando(!Comentando)
  };

  const enviarComentario = (comentario) => {
    const listaDeComentarios = [...Comentarios, comentario]
    setComentarios(listaDeComentarios)
    setComentando(false)
    setNumeroComentarios(NumeroComentarios +1)
  }

  const iconeCurtida = Curtido ? (iconeCoracaoPreto) : (iconeCoracaoBranco)
  const caixaDeComentario = Comentando ? (<SecaoComentario enviarComentario={enviarComentario}/>
    ) : (
      Comentarios.map(comentario =>{
        return (
          (<CommentContainer>
            <p>{comentario}</p>
            </CommentContainer>
            )
        )
      })
    )

  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={NumeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={NumeroComentarios}
        />
      </PostFooter>
      {caixaDeComentario}
    </PostContainer>
  )
}

export default Post