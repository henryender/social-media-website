import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import Post from './Post'

const PostLists = ({posts}) => {
  return (
    <div>
        <Box px='4' align='center'>
            {posts?.length===0?<Text fontSize='xl' textAlign='center'>No post added</Text>
            : posts?.map((post)=> <Post key={post.id} post={post}/>)}
        </Box>
     
    </div>
  )
}

export default PostLists
