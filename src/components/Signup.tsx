import { useState } from 'react';

import {  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button
} from '@chakra-ui/react'

export default function Signup() {
  const [formEmail, setFormEmail] = useState('')
  const [formPassword, setFormPassword] = useState('')
  const [formName, setFormName] = useState('')

  const handleNameInputChange = (e: React.SyntheticEvent) => setFormName((e.target as HTMLInputElement).value)
  const isNameError = formName === ''

  const handleEmailInputChange = (e: React.SyntheticEvent) => setFormEmail((e.target as HTMLInputElement).value)
  const isEmailError = formEmail === ''

  const handlePasswordInputChange = (e: React.SyntheticEvent) => setFormPassword((e.target as HTMLInputElement).value)
  const isPasswordError = formPassword === ''

  return (
    <div>
      <h2>Sign up</h2>
      <form>
      <FormControl isInvalid={isEmailError}>
          <FormLabel>Full Name</FormLabel>
          <Input type='email' value={formName} onChange={handleNameInputChange}/>
          {!isEmailError ? (
            <FormHelperText>
              Enter your full name
            </FormHelperText>
          ) : (
            <FormErrorMessage>Your full name is required.</FormErrorMessage>
          )}
        </FormControl>

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


        <button type="submit" color="primary">
          Join
        </button>
      </form>
    </div>
  )
}
