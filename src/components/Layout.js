import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { LOGIN } from '../lib/router'
import { useAuth } from '../CustomHooks/auth'
import NavBar from './NavBar'
import SideBar from './SideBar'
import { Box, Flex } from '@chakra-ui/react'



function Layout() {
  const Location = useLocation()
  const { pathname } = Location
  const navigate = useNavigate()
  const { user, isLoading } = useAuth()
  
  useEffect(() => {
    if (isLoading === 'false' && pathname.startsWith('/protected') && !user) { navigate(LOGIN) }

  }, [pathname, navigate, user, isLoading])
  if (isLoading) { console.log('Loading...') }
  return (
    <div>
      <NavBar />
      <Flex pt="16" pb="12" mx="auto" w="full" maxW="1200px">
        <Box w="900px">
          <Outlet />
        </Box>
        <SideBar />
      </Flex>


    </div>
  )
}

export default Layout