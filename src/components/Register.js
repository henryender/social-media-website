
import {
  Box, Button, Center,
  FormControl, FormErrorMessage,
  FormLabel, Heading,
  Input, Link, Text
} from '@chakra-ui/react'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { LOGIN } from '../lib/router'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';

import { useRegister } from '../CustomHooks/auth'
import { RegisterSchema } from '../FormValidate/formValidate'

const Register = () => {
  const { register: signup, isLoading } = useRegister()
  const { handleSubmit, register, formState: { errors }, reset } = useForm({
    resolver: yupResolver(RegisterSchema)
  });
  const handleRegister = async (data) => {
    const succeeded = await signup({ email: data.email, password: data.password, username: data.username });
    if (succeeded) { reset() }

  }

  return (
    <div>
      <Center w='100%' h='100vh'>
        <Box mx='1' maxWidth='md' p='9' borderWidth='1px' borderRadius='lg'>
          <Heading mb='4' size='lg' textAlign='center'>
            Sign up
          </Heading>
          <form onSubmit={handleSubmit(handleRegister)}>
            <FormControl isInvalid={errors.username && true}>
              <FormLabel>Username</FormLabel>
              <Input type='text' name='username' placeholder='username' {...register('username')} />
              <FormErrorMessage>{errors.username?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.email && true}>
              <FormLabel>Email</FormLabel>
              <Input type='text' name='email' placeholder='user@email.com' {...register('email')} />
              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.password && true}>
              <FormLabel>Password</FormLabel>
              <Input type='text' name='password' placeholder='Password123' {...register('password')} />
              <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
            </FormControl>
            <Button type='submit'
              mt='4'
              size='md'
              colorScheme='teal'
              width='full'
              isLoading={isLoading}
              loadingText='Signing up'>Sign Up</Button>
          </form>
          <Text fontSize='xlg' align='center' mt
            ='6'> Already have an account?{" "}
            <Link
              as={RouterLink}
              to={LOGIN}
              fontWeight='medium'
              textDecor='underline'
              color='teal.800'
            >
              Sign In
            </Link>
            {" "}instead!
          </Text>

        </Box>
      </Center>
    </div>
  )
}

export default Register

