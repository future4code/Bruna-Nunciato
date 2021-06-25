import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import logo from '../../assets/logo.png'
import CommentIcon from '@material-ui/icons/Comment';
import {ContainerComments, HeartContainer, CardPostContainer } from './styled'
// import  IconHeartCount from '../../components/IconHeartCount'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Comments from '../../components/Comments/Comments';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { LensOutlined } from '@material-ui/icons';
import CreateCommentsPosts from '../../components/Comments/CreateCommentsPost';


const useStyles = makeStyles((theme) => ({
  root: {
      width:700,
    // maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));



const PostsCards =(props) => {

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  let [curtido, setCurtido] = useState(false)
  let [iconLike, setIconLike] = useState (curtido ? <FavoriteIcon/> : <FavoriteBorderIcon/>)
  const [numeroCurtidas, setNumeroCurtidas] = useState(0)
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const onClickCurtida = () => {
    console.log(`curtiu`, curtido)
      setCurtido(!curtido)
     setIconLike(curtido ? <FavoriteIcon/> : <FavoriteBorderIcon/>) 
  //   if (numeroCurtidas === 0) {
  //  setCurtido(true)
  //     setNumeroCurtidas(+1)
  //   } else {
  //    setCurtido(false)
  //  setNumeroCurtidas(-1)
  //     }
 
  }



  const openComments= (id)=>{
    console.log(`abrir comentarios`, id)
    CommentsList(id)
    localStorage.setItem("idComment", id);
  }

  const CommentsList = ()=>{
    
  return<Comments  />

  }


  return (
    <CardPostContainer>
    <Card className="CardPost">
    <CardHeader
      avatar={
        <Avatar>
          <img width="40px" src={logo}/>
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      }
      
      subheader={props.title}
      title={props.createdAt}
    />
     <CardContent>
      <Typography variant="body2" color="textSecondary" component="p">
       {props.body}
      </Typography>
      <Typography variant="h6" color="textSecondary" component="p">
       {props.username}
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      
          {/* <IconButton aria-label="add to favorites"> */}
          {props.voteSum}
          <HeartContainer onClick={onClickCurtida}>
          {iconLike}
          </HeartContainer>
      {/* </IconButton> */}
      <ContainerComments>
      {props.commentCount}
         <CommentIcon />
      </ContainerComments>
      <IconButton
        className={clsx(classes.expand, {
          [classes.expandOpen]: expanded,
        })}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <ExpandMoreIcon  onClick={()=>openComments(props.id)}/>
      </IconButton> 
    </CardActions>
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
      {CommentsList()}
        <br/>
        <CreateCommentsPosts id={props.id}/>
       </CardContent>
    </Collapse>
  </Card>
  </CardPostContainer>
  );
}
export default PostsCards