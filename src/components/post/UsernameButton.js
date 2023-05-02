import React from 'react'
import { Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { PROTECTED} from '../../lib/router'

const UsernameButton = ({ user }) => {
    return (
        <div>
            <Button colorScheme='teal' variant='link' as={Link} to={`${PROTECTED}/profile/${user?.id}`} >                
                {user?.username}
            </Button>
        </div>
    )
}

export default UsernameButton
