import { Flex, IconButton } from '@chakra-ui/react'
import React from 'react'
import { useToggleLike } from '../../CustomHooks/posts';
import {
    FaRegHeart,
    FaHeart,
    FaComment,
    FaRegComment,
    FaTrash,
} from "react-icons/fa";
import { useAuth } from '../../CustomHooks/auth';
import { Link } from 'react-router-dom';
import { PROTECTED } from '../../lib/router';
import { useDeletePost } from '../../CustomHooks/posts';

import useUser from '../../CustomHooks/user';
import { useComments } from '../../CustomHooks/comments';

const Action = ({ post }) => {
    
    const { user: authUser, isLoading: authLoading } = useAuth()
    const uid = post.uid
    const { user } = useUser(uid)
    const isLiked = post.likes.includes(user?.id)
    const id = post.id
    const { ToggleLike, isLoading: likeLoading } = useToggleLike({ id, isLiked, uid: user?.id })
    const { deletePost, isLoading: deleteLoading } = useDeletePost(id);
    
    const { comments, isLoading: commentsLoading } = useComments(id)
    if (commentsLoading) return 'comments Loading...'
    return (
        <Flex p='2'>
            <Flex alignItems='center'>
                <IconButton
                    onClick={ToggleLike}
                    isLoading={likeLoading || authLoading}
                    size="md"
                    colorScheme="red"
                    variant="ghost"
                    isRound
                    icon={isLiked ? <FaHeart /> : <FaRegHeart />}
                />
                {post.likes.length}
            </Flex>
            <Flex align='center'>
                <IconButton
                    as={Link}
                    to={`${PROTECTED}/comments/${id}`}
                    size="md"
                    colorScheme="red"
                    variant="ghost"
                    isRound
                    icon={comments.length === 0 ? <FaRegComment /> : <FaComment />}
                /> 
                {comments.length}
            </Flex>

            <Flex align='center' ml='auto'>
                {!authLoading && authUser?.id === uid && (
                    <IconButton
                        onClick={()=>{deletePost()}}
                        size="md"
                        colorScheme="red"
                        variant="ghost"
                        isRound
                        icon={<FaTrash />}
                        isLoading={deleteLoading}
                    />
                )

                }

            </Flex>
        </Flex>
    )
}

export default Action
