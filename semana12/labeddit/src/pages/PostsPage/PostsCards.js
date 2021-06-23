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
import {ContainerComments} from './styled'
import  IconHeartCount from '../../components/IconHeartCount'


const useStyles = makeStyles((theme) => ({
  root: {
      width:500,
    // maxWidth: 345,
  },

}));


const PostsCards =(props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [curtido, setCurtido] = useState(false)
  const [numeroCurtidas, setNumeroCurtidas] = useState(0)
  let iconeCurtida
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const onClickCurtida = () => {
      setCurtido(!curtido) 
    if (numeroCurtidas === 0) {
   setCurtido(true)
      setNumeroCurtidas(+1)
    } else {
     setCurtido(false)
   setNumeroCurtidas(-1)
      }
  }
  return (
    <Card className={classes.root}>
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
      title={props.title}
      subheader={props.createdAt}
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
      
          <IconButton aria-label="add to favorites">
          <IconHeartCount
            icone={iconeCurtida}
            onClick={onClickCurtida}
            valorContador={props.voteSum}
          />
      </IconButton>
      <ContainerComments>
      {props.commentCount}
         <CommentIcon />
      </ContainerComments>
      {/* {/* <IconButton
        className={clsx(classes.expand, {
          [classes.expandOpen]: expanded,
        })}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </IconButton> */}
    </CardActions>
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
        {/* <Typography paragraph>Comentários:</Typography> */}
          </CardContent>
    </Collapse>
  </Card>
  );
}
export default PostsCards