import { Box } from '@chakra-ui/react'
import React from 'react'
import { useParams } from 'react-router-dom'
import { usePostForComment } from '../../CustomHooks/posts'
// import Post from '../post/Post'
import NewComment from './NewComment'
import {CommentList} from './CommentList'
import PostForComment from './PostForComment'
function Comments() {
  const { id } = useParams();
  
  const { post, isLoading } = usePostForComment(id)
  if (isLoading) return 'PageLoading...'
  return (
    <>
      <Box align='center' pt='50'>
        <PostForComment post={post}/>
        
        {/* <Post post={post} /> */}
        <NewComment post={post} />
        <CommentList post={post}  />
      </Box>

    </>

  )
}

export default Comments