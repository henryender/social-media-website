import { Button, Divider, Flex, HStack, Stack, Text, useDisclosure } from '@chakra-ui/react'
import { format } from 'date-fns'
import React from 'react'
import { useParams } from 'react-router-dom'
import useUser from '../CustomHooks/user'
import Avatars from './Avatars'
import PostLists from './post/PostLists'
import EditProfile from './EditProfile'
import { useAuth } from '../CustomHooks/auth'
import { usePosts } from '../CustomHooks/posts'

function Profile() {
    const { id } = useParams()

    const { posts, isLoading: PostLoading } = usePosts(id)
    const { user: authUser, isLoading: authLoading } = useAuth()
    const { user, isLoading: userLoading } = useUser(id)
   
    
    const { isOpen, onOpen, onClose } = useDisclosure()


    if (userLoading) return 'Loading...'
    
    return (
        <div>
            <Stack spacing="5">
                <Flex p={["4", "6"]} pos="relative" align="center">
                    <Avatars size="2xl" user={user} />

                    {!authLoading && authUser.id === user.id && (
                        <Button
                            pos="absolute"
                            mb="2"
                            top="6"
                            right="6"
                            colorScheme="teal"
                            onClick={onOpen}
                        >
                            Change avatar
                        </Button>
                    )}

                    <Stack ml="10">
                        <Text fontSize="2xl">{user.username}</Text>
                        <HStack spacing="10">
                            <Text color="gray.700" fontSize={["sm", "lg"]}>
                                {posts.length} posts
                            </Text>
                            <Text color="gray.700" fontSize={["sm", "lg"]}>
                                Likes: 1
                            </Text>
                            <Text color="gray.700" fontSize={["sm", "lg"]}>
                                Joined:{format(user.date, " MMMM yyyy")}
                            </Text>
                        </HStack>
                    </Stack>

                    <EditProfile isOpen={isOpen} onClose={onClose} />
                </Flex>
                <Divider />
                {PostLoading ? <Text align='center'>Posts are Loading...</Text> : <PostLists posts={posts} />}


            </Stack>
        </div>
    )
}

export default Profile