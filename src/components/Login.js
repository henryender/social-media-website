
import {
  Box, Button, Center,
  FormControl, FormErrorMessage,
  FormLabel, Heading,
  Input, Link, Text
} from '@chakra-ui/react'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {REGISTER } from '../lib/router'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { LogInSchema } from '../FormValidate/formValidate'
import { useLogin } from '../CustomHooks/auth'



const Login = () => {
  const {login, isLoading}=useLogin()
  const { handleSubmit, register, formState: { errors }, reset } = useForm({
    resolver: yupResolver(LogInSchema)
  });
  const handleLogin = async (data) => {
    
    const succeeded = await login ({ email: data.email, password: data.password, username: data.username });
    if (succeeded) { reset() }

  }

  return (
    <div>
      <Center w='100%' h='100vh'>
        <Box mx='1' maxWidth='md' p='9' borderWidth='1px' borderRadius='lg'>
          <Heading mb='4' size='lg' textAlign='center'>
            Sign In
          </Heading>
          <form onSubmit={handleSubmit(handleLogin)}>
           
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
              loadingText='Signing in'>Log in</Button>
          </form>
          <Text fontSize='xlg' align='center' mt
            ='6'> Don't have an account?{" "}
            <Link
              as={RouterLink}
              to={REGISTER}
              fontWeight='medium'
              textDecor='underline'
              color='teal.800'
            >
              Register
            </Link>
            {" "}instead!
          </Text>

        </Box>
      </Center>
    </div>
  )
}

export default Login

