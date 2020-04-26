import React from 'react';
import CommonLayout from '../components/CommonLayout/index';
import AuthForm from '../components/organisms/AuthForm';

interface Props {}

const Login = (props: Props) => {
  return (
    <CommonLayout noFooter>
      <AuthForm isLogin />
    </CommonLayout>
  );
};

export default Login;
