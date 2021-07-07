import { BASE_URL } from "../../constants/urls";
import useRequestData from "../../hooks/useRequestData";
import { ContainerPost, Welcome } from "./styled";
import React from "react";
import PostsCards from "./PostsCards";
import DoPost from "../../components/DoPost/DoPost";
import Loading from "../../assets/loading.gif";
import useProtectedPage from "../../hooks/useProtectedPage";
import Hello from "../../assets/hello.png";

export const PostPage = () => {
  useProtectedPage();
  const posts = useRequestData([], `${BASE_URL}/posts`);

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
    </ContainerPost>
  );
};
export default PostPage;
