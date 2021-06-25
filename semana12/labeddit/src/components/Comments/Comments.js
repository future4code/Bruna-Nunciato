import React, {useState} from 'react'
import Typography from '@material-ui/core/Typography';
import { RequestComments } from '../../hooks/RequestComments';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined'
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import CommentVotes from './CommentVotes'
// import { HeartContainer1,  HeartContainer2 } from './styled';
import postVote from '../../hooks/postVote'
import { BASE_URL} from '../../constants/urls'
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// import { LinkedCameraSharp } from '@material-ui/icons';
import { delComment } from '../../services/comments';

const Comments = (id)=>{
     let idComment = localStorage.getItem("idComment")
    const comments = RequestComments([], idComment)

    let [curtido, setCurtido] = useState(localStorage.getItem("likeUser"))
    let [descurtido, setDescurtido] = useState(localStorage.getItem("likeUser"))
    const [numberLike, setNumberLike] = useState()
    const [like, setLike] = useState()
    let [iconLike, setIconLike] = useState (curtido ? <ThumbUpAltIcon/> : <ThumbUpOutlinedIcon/>)
    let [iconDislike, setDislike] = useState (descurtido ? <ThumbDownAltIcon /> : <ThumbDownOutlinedIcon/>)
       
    

    return(
        <div>
            {console.log(`comentários`, curtido)}
        {comments ? comments.map((comment)=>{
            localStorage.setItem('likeUser', comment.userVote);
               return(
            <div key={comment.id}>
                <hr/>
                <Typography paragraph variant="h6" color="textSecondary" >{comment.body}</Typography>
                <Typography paragraph color="textSecondary">{comment.username}</Typography>
                <Typography paragraph>{comment.createdAt}</Typography>

                <IconButton onClick={()=>delComment(comment.id)} aria-label="delete">
                  <DeleteIcon />
                 </IconButton>
                {/* <Typography paragraph>{comment.postId}</Typography> */}
                {comment.voteSum}
                <CommentVotes userVote={comment.userVote}
                id={comment.id}
                />
                {/* //  <HeartContainer1 onClick={()=>onClickPositive(comment.userVote)}>
                // {iconLike}
                // </HeartContainer1>
                // <HeartContainer2 onClick={()=>onClickNegative(comment.userVote)}>
                //   {iconDislike}
                // </HeartContainer2>
                // <Typography paragraph>{comment.userVote}</Typography>
                // <IconButton onClick={()=>delComment(comment.id)} aria-label="delete">
                //     <DeleteIcon />
                //   </IconButton> */}
            </div>
                )
        }):<Typography paragraph>Nenhum comentário</Typography>}
    </div>

    )
}
export default Comments
