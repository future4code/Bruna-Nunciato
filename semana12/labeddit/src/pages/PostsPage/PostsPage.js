import { BASE_URL } from '../../constants/urls'
import useRequestData from '../../hooks/useRequestData'
import { ContainerPost } from './styled'
import React from 'react';
import PostsCards from './PostsCards';
import DoPost from '../../components/DoPost/DoPost';


  
export const PostPage = ()=>{
    const posts = useRequestData([],`${BASE_URL}/posts`)
    // const day = posts[0].createdAt.slice(9, 10);
    // const month = posts[0].createdAt.slice(6, 7);
    // const year = posts[0].createdAt.slice(0, 4);
    // const okDate = `${day}/${month}/${year}`;

    
    return(
        <ContainerPost>
            <h1>Bem Vind@</h1>
            <DoPost/>
            {console.log(posts)}    
        {posts && posts.map((post)=>{
            // localStorage.setItem('idPost', post.id);
            return(<PostsCards
                commentCount={post.commentCount}
                voteSum={post.voteSum}
                body={post.body}
                 title={post.title}
                createdAt={post.createdAt}
                username={post.username}
                id={post.id}
             
       />      
            )})} 
            
             </ContainerPost>
    )
}
export default PostPage