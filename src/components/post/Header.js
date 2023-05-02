import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import useUser from '../../CustomHooks/user'
import Avatars from '../Avatars'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import UsernameButton from './UsernameButton'
function Header({ uid, date }) {
    const { user, isLoading } = useUser(uid)
    if (isLoading) return 'Loading...'
    return (
        <Flex
            alignItems="center"
            borderBottom="2px solid"
            borderColor="teal.100"
            p="3"
            bg="gray.50"
        >
            <Avatars user={user} size='sm' />
            <Box ml="4">
               <UsernameButton user={user}/>
                <Text fontSize="sm" color="gray.500">
                    {formatDistanceToNow(date)}
                </Text>
            </Box>
        </Flex>
    )
}

export default Header