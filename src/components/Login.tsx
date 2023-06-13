/* TODO Add handler and login to direct to dashboard */
import { useState } from 'react';

import {  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button
} from '@chakra-ui/react'

export default function Login() {
  const [formEmail, setFormEmail] = useState('')
  const [formPassword, setFormPassword] = useState('')
  const handleEmailInputChange = (e: React.SyntheticEvent) => setFormEmail(e.target.value)

  const isEmailError = formEmail === ''

  const handlePasswordInputChange = (e: React.SyntheticEvent) => setFormPassword(e.target.value)

  const isPasswordError = formPassword === ''

  return (
    <div>
      <h2>Login</h2>
      <form>
        <FormControl isInvalid={isEmailError}>
          <FormLabel>Email address</FormLabel>
          <Input type='email' value={formEmail} onChange={handleEmailInputChange}/>
          {!isEmailError ? (
            <FormHelperText>
              Enter the email you'd like to use.
            </FormHelperText>
          ) : (
            <FormErrorMessage>Email is required.</FormErrorMessage>
          )}
        </FormControl>

        <FormControl isInvalid={isPasswordError}>
          <FormLabel>Password</FormLabel>
          <Input type='password' value={formPassword} onChange={handlePasswordInputChange}/>
          {!isPasswordError ? (
            <FormHelperText>
              Please enter your password for your account.
            </FormHelperText>
          ) : (
            <FormErrorMessage>Password is required.</FormErrorMessage>
          )}
        </FormControl>

        <Button colorScheme='orange'>Login</Button>
      </form>
    </div>
  )
}
