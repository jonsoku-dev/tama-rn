import { ErrorMessage, Field, Form } from 'formik';
import React from 'react';
import styled from 'styled-components';
interface Props {
  isLogin: boolean;
  isSubmitting: boolean;
}

const AuthFormPresenter = ({ isLogin, isSubmitting }: Props) => {
  return (
    <FormWrapper>
      {!isLogin && (
        <>
          <Input name="username" placeholder="Username" />
          <Error name="username" component="div" />
        </>
      )}
      <Input type="email" name="email" placeholder="Email" />
      <Error name="email" component="div" />
      <Input type="password" name="password" placeholder="Password" />
      <Error name="password" component="div" />
      <Button type="submit" disabled={isSubmitting}>
        Submit
      </Button>
    </FormWrapper>
  );
};

export default AuthFormPresenter;

const FormWrapper = styled(Form)`
  display: grid;
`;

const Input = styled(Field)`
  width: 100%;
  box-sizing: border-box;
  padding: 16px 0 8px;
  border-bottom: 2px solid #eeeeee;

  &:focus {
    border-bottom: 2px solid #000000;
  }
`;
const Error = styled(ErrorMessage)`
  color: red;
  margin: 8px;
`;

const Button = styled.button`
  width: 100%;
  background-color: #000000;
  color: #ffffff;
  box-sizing: border-box;
  padding: 16px 0;
  margin-top: 16px;
`;
