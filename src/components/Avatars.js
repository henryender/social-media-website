import React from 'react'
import { Avatar } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { PROTECTED } from '../lib/router'


function Avatars({ user, isLoading, size = 'xl', overRideAvatar = null }) {
    if (isLoading) return 'Loading...'
    return (
        <>
            <Avatar name={user?.username}
                as={Link}
                to={`${PROTECTED}/profile/${user?.id}`}
                size={size}
                src={overRideAvatar || user?.avatar}
                _hover={{ cursor: 'pointer', opacity: '0.8' }} />

        </>
    )
}

export default Avatars