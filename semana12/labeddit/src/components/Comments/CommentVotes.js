import React, { useState } from "react";
import { BASE_URL } from "../../constants/urls";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
import ThumbDownOutlinedIcon from "@material-ui/icons/ThumbDownOutlined";
import {
  HeartContainer1,
  HeartContainer2,
  HeartContainer3,
  ContainerVotes,
} from "./styled";
import { changeVote, postVote, deleteVote } from "../../services/comments";
import CancelPresentationIcon from "@material-ui/icons/CancelPresentation";

const CommentVotes = (props) => {
  const [like, setLike] = useState();
  let [iconLike, setIconLike] = useState(
    props.userVote === 1 ? <ThumbUpAltIcon /> : <ThumbUpOutlinedIcon />
  );
  let [iconDislike, setIconDislike] = useState(
    props.userVote === -1 ? <ThumbDownAltIcon /> : <ThumbDownOutlinedIcon />
  );

  const onClickPositive = (id, vote) => {
    if (vote === null) {
      postVote(`${BASE_URL}/comments/${id}/votes`, 1);
    } else if (vote === -1) {
      changeVote(`${BASE_URL}/comments/${id}/votes`, 1);
    }
    return setIconLike(<ThumbUpAltIcon />);
  };

  const onClickNegative = (id, vote) => {
    if (vote === null) {
      postVote(`${BASE_URL}/comments/${id}/votes`, -1);
    } else if (vote === 1) {
      changeVote(`${BASE_URL}/comments/${id}/votes`, -1);
    }
    return setIconDislike(<ThumbDownAltIcon />);
  };

  const onClickDeleteVote = (id) => {
    deleteVote(`${BASE_URL}/comments/${id}/votes`);
  };

  return (
    <ContainerVotes>
      Total de Votos:
      {props.voteSum ? props.voteSum : 0}
      <HeartContainer1
        onClick={() => onClickPositive(props.id, props.userVote)}
      >
        {iconLike}
      </HeartContainer1>
      <HeartContainer2
        onClick={() => onClickNegative(props.id, props.userVote)}
      >
        {iconDislike}
      </HeartContainer2>
      <HeartContainer3>
        <CancelPresentationIcon onClick={() => onClickDeleteVote(props.id)} />
      </HeartContainer3>
    </ContainerVotes>
  );
};
export default CommentVotes;
