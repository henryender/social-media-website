import { Button, FormControl, FormLabel, HStack, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import React from 'react'
import { useAuth } from '../CustomHooks/auth'
import { useUpdateAvatar } from '../CustomHooks/user'
import Avatars from './Avatars'

function EditProfile({ isOpen, onClose }) {
    const { user, isLoading: authLoading } = useAuth()

    const { setFile, isLoading: fileLoading, updateAvatar, fileURL } = useUpdateAvatar(user?.id)
    if (authLoading) return 'Loading...'
    const handleChange = (e) => {
        setFile(e.target.files[0])

    }
    return (
        <div>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Edit profile</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <HStack spacing="5">
                            <Avatars user={user}
                                overRideAvatar={fileURL}
                            />
                            <FormControl py="4">
                                <FormLabel htmlFor="picture">Change avatar</FormLabel>
                                <input type="file" accept="image/*" onChange={handleChange} />
                            </FormControl>
                        </HStack>
                        <Button
                            loadingText="Uploading"
                            w="full"
                            my="6"
                            colorScheme="teal"
                            onClick={updateAvatar}
                            isLoading={fileLoading}
                        >
                            Save
                        </Button>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    )
}

export default EditProfile