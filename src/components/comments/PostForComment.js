
import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import Header from '../post/Header'
import PostActionsComment from './PostActionsComment'


function PostForComment({post}) {
    return (
        <div>
            <Box p="2" maxW="600px" textAlign="left">
                <Box border="2px solid" borderColor="gray.100" borderRadius="md">
                    <Header uid={post.uid} date={post.date} />
                    <Box p="2" minH="100px">
                        <Text wordBreak="break-word" fontSize="md">
                            {post.text}
                        </Text>
                    </Box>
                     <PostActionsComment post={post}/>
                </Box>
            </Box>
        </div>
    )
}

export default PostForComment