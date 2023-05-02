import { Box, Button, Heading, HStack, Textarea } from '@chakra-ui/react'
import React from 'react'
import { useForm } from 'react-hook-form'
import TextareaAutosize from 'react-textarea-autosize';
import { useAuth } from '../../CustomHooks/auth';
import useAddPost, { usePosts } from '../../CustomHooks/posts';
import PostLists from './PostLists';

export const NewPost = () => {
    const { handleSubmit, register, reset } = useForm()
    const { addPost, isLoading: addingPost } = useAddPost()
    const { user, isLoading: authLoading } = useAuth()
    const {posts, isLoading:postLoading}=usePosts()
    if(postLoading) return 'Loading Posts...'

    function handleAddPost(data) {
       addPost({
        uid:user.id,
        text:data.text
       })
        reset()
    }
    return (
        <>
            <Box maxW="600px" mx="auto" py="10">
                <form onSubmit={handleSubmit(handleAddPost)}>
                    <HStack justify="space-between">
                        <Heading size="lg">New Post</Heading>
                        <Button
                            colorScheme="teal"
                            type="submit"
                            isLoading={authLoading||addingPost}
                            loadingText="Loading..."
                        >
                            Post
                        </Button>
                    </HStack>
                    <Textarea
                        type='text'
                        as={TextareaAutosize}
                        resize="none"
                        mt="5"
                        placeholder="Create a new post..."
                        minRows={3}
                        {...register('text', { required: true })}
                    />
                </form>
            </Box>
            <PostLists posts={posts}/>
        </>
    )

}














export function Dashboard() {
    return (
        <div>
            <NewPost />
        </div>
    )
}

