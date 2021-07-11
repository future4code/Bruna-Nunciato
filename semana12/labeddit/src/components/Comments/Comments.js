import React, {useState} from 'react'
import Typography from '@material-ui/core/Typography';
import { RequestComments } from '../../hooks/RequestComments';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined'
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import CommentVotes from './CommentVotes'
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import { delComment } from '../../services/comments';
import UseDateTreatmentBr from '../../hooks/UseDateTreatmentBr';

const Comments = (id)=>{
     let idComment = localStorage.getItem("idComment")
    const comments = RequestComments([], idComment)
    let [curtido, setCurtido] = useState(localStorage.getItem("likeUser"))
    let [descurtido, setDescurtido] = useState(localStorage.getItem("likeUser"))
    const [numberLike, setNumberLike] = useState()
    const [like, setLike] = useState()
    let [iconLike, setIconLike] = useState (curtido ? <ThumbUpAltIcon/> : <ThumbUpOutlinedIcon/>)
    let [iconDislike, setDislike] = useState (descurtido ? <ThumbDownAltIcon /> : <ThumbDownOutlinedIcon/>)

       
    const commentsList = comments && comments.map((comment)=>{
        localStorage.setItem('likeUser', comment.userVote);
           return(
        <div key={comment.id}>
            <hr/>
            <Typography paragraph variant="h6" align='center'  color="textSecondary" >{comment.body}</Typography>
             <Typography align='center' paragraph>➡️{UseDateTreatmentBr(comment.createdAt)}</Typography>
            <Typography paragraph color="textSecondary">🗣️{comment.username}</Typography>
            <CommentVotes userVote={comment.userVote}
            id={comment.id}
            voteSum={comment.voteSum}
            />
           </div>
            ) })


    return(
        <div>
            {commentsList ? commentsList : <Typography paragraph>Nenhum comentário</Typography>}
    </div>

    )
}
export default Comments

