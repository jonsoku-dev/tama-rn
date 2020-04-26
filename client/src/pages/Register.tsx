import React from 'react';
import CommonLayout from '../components/CommonLayout/index';
import AuthForm from '../components/organisms/AuthForm';

interface Props {}

const Register = (props: Props) => {
  return (
    <CommonLayout noFooter>
      <AuthForm />
    </CommonLayout>
  );
};

export default Register;
