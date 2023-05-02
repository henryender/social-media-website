import React from 'react'
import { Box, Button, Code, Stack } from '@chakra-ui/react'
import { PROTECTED, USERS } from '../lib/router'
import { Link } from 'react-router-dom'
import { useAuth } from '../CustomHooks/auth'
import Avatars from './Avatars'

function ActiveUser() {
  const { user, isLoading } = useAuth();

  return <Stack align='center' spacing='5' my='8'>
    {/* Created an Avatar component */}
    <Avatars user={user} isLoading={isLoading} />
    <Code>{user?.username}</Code>
    <Button colorScheme='teal' width='250px' as={Link} to={`${PROTECTED}/profile/${user?.id}`}>Edit Profile</Button>
  </Stack>
}
const SideBar = () => {
  return (
    <div>
      <Box
        px="6"
        height="100vh"
        w="100%"
        maxW="300px"
        borderLeft="1px solid"
        borderLeftColor="teal.100"
        position="sticky"
        top="16"
        display={{ base: "none", md: "block" }}>
        <ActiveUser />
        <Box align="center">
          <Box as="ul" borderBottom="2px solid" borderColor="teal.200" />
          <Button
            variant="outline"
            colorScheme="teal"
            as={Link}
            to={USERS}
            mt="4"
            size="sm"
          >
            ALL USERS
          </Button>
        </Box>
      </Box>
    </div>
  )
}

export default SideBar
