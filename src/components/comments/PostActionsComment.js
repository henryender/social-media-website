import React from 'react'
import {
    FaRegHeart,
    FaHeart,
    FaComment,
    FaRegComment,

} from "react-icons/fa";
import { Flex, IconButton } from '@chakra-ui/react'
import { useAuth } from '../../CustomHooks/auth';
import useUser from '../../CustomHooks/user';
import { useToggleLike } from '../../CustomHooks/posts';
import { useComments } from '../../CustomHooks/comments';
import { PROTECTED } from '../../lib/router';
import { Link } from 'react-router-dom';

function PostActionsComment({ post }) {
    const { isLoading: authLoading } = useAuth()
    const uid = post.uid
    const { user } = useUser(uid)
    const isLiked = post.likes.includes(user?.id)
    const id = post.id
    const { ToggleLike, isLoading: likeLoading } = useToggleLike({ id, isLiked, uid: user?.id })


    const { comments, isLoading: commentsLoading } = useComments(id)
    if (commentsLoading) return 'comments Loading...'
    return (
        <div>
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


            </Flex>
        </div>
    )
}

export default PostActionsComment