import React, {useState} from 'react'
import { BASE_URL } from "../../constants/urls";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined'
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import { HeartContainer1, HeartContainer2, HeartContainer3 } from './styled';
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import { LinkedCameraSharp } from "@material-ui/icons";
import { changeVote, postVote, deleteVote } from "../../services/comments";
import { ContainerVotes } from "./styled";
import CancelPresentationIcon from "@material-ui/icons/CancelPresentation";


const CommentVotes = (props) => {
    // let idComment = localStorage.getItem("idComment")

    // let [curtido, setCurtido] = useState(localStorage.getItem("likeUser"))
    // let [descurtido, setDescurtido] = useState(localStorage.getItem("likeUser"))
    const [like, setLike] = useState()
    let [iconLike, setIconLike] = useState (props.userVote === 1 ? <ThumbUpAltIcon/> : <ThumbUpOutlinedIcon/>)
    let [iconDislike, setDislike] = useState (props.userVote === -1 ? <ThumbDownAltIcon /> : <ThumbDownOutlinedIcon/>)
      
    

  const onClickPositive = (id,vote) => {
  if (vote === null){
    postVote(`${BASE_URL}/comments/${id}/votes`,1)
  } else if (vote === -1){
    changeVote(`${BASE_URL}/comments/${id}/votes`,1)
  }
   return setIconLike(<ThumbUpAltIcon/>)
}

  const onClickNegative = (id,vote) => {
    if (vote === null){
        postVote(`${BASE_URL}/comments/${id}/votes`,-1)
    } else if (vote === 1){
     changeVote(`${BASE_URL}/comments/${id}/votes`,-1)
    }
    return setIconLike(<ThumbDownAltIcon />) 
}

const deleteVote = (id)=>{
    deleteVote(`${BASE_URL}/comments/${id}/votes`)
}

  return (
    <ContainerVotes>
       <HeartContainer1 onClick={() => onClickPositive(props.id, props.userVote)}>
        {iconLike}
      </HeartContainer1>
      <HeartContainer2 onClick={() => onClickNegative(props.id, props.userVote)}>
             {iconDislike}
      </HeartContainer2>
      <HeartContainer3>
      <CancelPresentationIcon onClick={()=>deleteVote(props.id)}/>
      </HeartContainer3>
    </ContainerVotes>
  );
};
export default CommentVotes;
