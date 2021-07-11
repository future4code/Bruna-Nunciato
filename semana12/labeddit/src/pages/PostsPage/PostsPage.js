import { ContainerPost, Welcome } from "./styled";
import React, {useContext} from "react";
import PostsCards from "./PostsCards";
import DoPost from "../../components/DoPost/DoPost";
import Loading from "../../assets/loading.gif";
import useProtectedPage from "../../hooks/useProtectedPage";
import Hello from "../../assets/hello.png";
import Pagination from '../../components/Pagination'
import {GlobalStateContext} from "../../globalstate/GlobalStateContext"

export const PostPage = () => {
  useProtectedPage();
  const {posts} = useContext(GlobalStateContext)

  const postList =
    posts &&
    posts.map((post) => {
      return (
        <PostsCards
          commentCount={post.commentCount}
          voteSum={post.voteSum}
          body={post.body}
          title={post.title}
          createdAt={post.createdAt}
          username={post.username}
          id={post.id}
          userVote={post.userVote}
        />
      );
    });

  return (
    <ContainerPost>
      <Welcome src={Hello} alt="hello image" />
      <DoPost />
      {postList ? postList : <img src={Loading} alt="loading" />}
      
      <Pagination/>
    </ContainerPost>
  );
};
export default PostPage;
