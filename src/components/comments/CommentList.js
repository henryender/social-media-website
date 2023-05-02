import { Box, Flex, IconButton, Text } from '@chakra-ui/react'
import React from 'react'
import { FaTrash } from 'react-icons/fa'
import { useComments } from '../../CustomHooks/comments'
import Avatars from '../Avatars'
import useUser from '../../CustomHooks/user'
import { formatDistanceToNow } from 'date-fns'
import UsernameButton from '../post/UsernameButton'
import { useDeleteComment } from '../../CustomHooks/comments'
import { useAuth } from '../../CustomHooks/auth'
export function CommentList({ post }) {
    const { comments, isLoading } = useComments(post?.id)
    if (isLoading) return 'Loading comments'
    return (
        <>
        {comments?.length===0?<Text fontSize='xl' textAlign='center'>No comment yet</Text> :
            comments?.map((comment) => 
            <div><CommentDisplay comment={comment} key={comment.id} /></div>
            )}
           
            
        </>

    )
}


function CommentDisplay({ comment }) {

    const { text, date, id, uid } = comment
    const { user} = useUser(uid)
    const { deleteComment, isLoading: deletLoading } = useDeleteComment(id)
    const { user: authUser, isLoading: authLoading } = useAuth()


    return (
        <>
        
            <Box px="4" py="2" maxW="600px" mx="auto" textAlign="left">
                <Flex pb="2">
                    <Avatars user={user} size="sm" />
                    <Box flex="1" ml="4">
                        <Flex borderBottom="1px solid" borderColor="teal.100" pb="2">
                            <Box>
                                <UsernameButton user={user} />
                                <Text fontSize="xs" color="gray.500">
                                    {formatDistanceToNow(date)} ago
                                </Text>
                            </Box>
                            {!authLoading && authUser.id === uid && (
                                <IconButton
                                    size="sm"
                                    ml="auto"
                                    icon={<FaTrash />}
                                    colorScheme="red"
                                    variant="ghost"
                                    isRound
                                    onClick={deleteComment}
                                    isLoading={deletLoading}
                                />
                            )}
                        </Flex>
                        <Box pt="2" fontSize="sm">
                            <Text>{text}</Text>
                        </Box>
                    </Box>
                </Flex>
            </Box>
        </>
    )
}