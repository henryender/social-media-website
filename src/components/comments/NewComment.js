import { Box, Button, Flex, Input } from '@chakra-ui/react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from '../../CustomHooks/auth'
import { useAddComment } from '../../CustomHooks/comments'
import Avatars from '../Avatars'


function NewComment({ post }) {
    const { id: postID } = post;
    const { handleSubmit, register, reset } = useForm()
    const { user, isLoading: authLoading } = useAuth()
    const { addComment, isLoading: commentLoading } = useAddComment({ postID, uid: user?.id });

    function handleAddComment(data) {
        addComment(data.text)
        reset()
    }
    return (
        <>
            <Box maxW="600px" mx="auto" py="6">
                <Flex padding="4">
                    <Avatars user={user} size="sm" />
                    <Box flex="1" ml="4">
                        <form onSubmit={handleSubmit(handleAddComment)}>
                            <Box>
                                <Input
                                    size="sm"
                                    variant="flushed"
                                    placeholder="Write comment..."
                                    autoComplete="off"
                                    {...register("text", { required: true })}
                                />
                            </Box>
                            <Flex pt="2">
                                <Button
                                    isLoading={commentLoading || authLoading}
                                    type="submit"
                                    colorScheme="teal"
                                    size="xs"
                                    ml="auto"
                                >
                                    Add Comment
                                </Button>
                            </Flex>
                        </form>
                    </Box>
                </Flex>
            </Box>
        </>
    )
}

export default NewComment