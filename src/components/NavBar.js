import React from 'react'
import { Flex, Link, Button } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { DASHBOARD } from '../lib/router'
import { useLogout } from '../CustomHooks/auth'
const NavBar = () => {
    const { logout, isLoading } = useLogout()
    return (
        <div>
            <Flex
                shadow='sm'
                pos="fixed"
                width='full'
                borderTop="6px solid"
                height={16}
                zIndex='3'
                justify='center'
                bg='white'

            >
                <Flex px={4} w='full' align='center' maxW='1200px' >
                    <Link color='teal' fontWeight='bold' as={RouterLink} to={DASHBOARD}>Home</Link>
                    <Button ml='auto'
                        colorScheme='teal'
                        size='sm'
                        onClick={logout}
                        isLoading={isLoading}
                    >Logout
                    </Button>
                </Flex>
            </Flex>
        </div>
    )
}

export default NavBar
