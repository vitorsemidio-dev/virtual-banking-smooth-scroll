/** @format */

import React from 'react';

import ScrollToTop from '../../components/ScrollToTop';

import {
  SignInContainer,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
} from './styles';

const SignIn: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <SignInContainer>
        <FormWrap>
          <Icon to='/'>logo</Icon>
          <FormContent>
            <Form action='#'>
              <FormH1>Sign in to your account</FormH1>

              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' required />

              <FormLabel htmlFor='for'>Password</FormLabel>
              <FormInput type='password' required />

              <FormButton type='submit'>Continue</FormButton>

              <Text>Forgot password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </SignInContainer>
    </>
  );
};

export default SignIn;
