import { SimpleGrid } from "@chakra-ui/react";
import { useUsers } from "../CustomHooks/user";
import { Button, Code, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Avatars from "./Avatars";
import { PROTECTED } from "../lib/router";

export default function Users() {
    const { users, isLoading } = useUsers();

    if (isLoading) return "Loading...";

    return (
        <SimpleGrid columns={[2, 3, 4]} spacing={[2, 3]} px="10px" py="6">
            {users?.map((user) => (
                <User key={user.id} user={user} />
            ))}
        </SimpleGrid>

    );
}

function User({ user }) {
    const { id, username } = user
    return (
        <>
            <VStack
                bg="gray.100"
                shadow="sm"
                rounded="md"
                textAlign="center"
                p="4"
                spacing="3"
            >
                <Avatars user={user} />
                <Code>@{username}</Code>
                <Link>
                    <Button
                        as={Link}
                        to={`${PROTECTED}/profile/${id}`}
                        size="sm"
                        variant="link"
                        colorScheme="teal"
                    >
                        View Profile
                    </Button>
                </Link>
            </VStack>
        </>
    )
}