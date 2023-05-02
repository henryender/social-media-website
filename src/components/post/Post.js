import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import Header from './Header'
import Action from './Action'

const Post = ({post}) => {
  return (
    <Box p="2" maxW="600px" textAlign="left">
      <Box border="2px solid" borderColor="gray.100" borderRadius="md">
        <Header uid={post.uid} date={post.date}/>
        <Box p="2" minH="100px">
          <Text wordBreak="break-word" fontSize="md">
            {post.text}
          </Text>
        </Box>
        <Action post={post}/>
      </Box>
    </Box>
  )
}

export default Post
