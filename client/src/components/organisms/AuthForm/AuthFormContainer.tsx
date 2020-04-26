import { Formik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import AuthFormPresenter from './AuthFormPresenter';
import { loginFn, registerFn } from '../../../store/actions/v1/auth.action';

interface IValues {
  username: string;
  email: string;
  password: string;
}

const initialValues: IValues = {
  username: '',
  email: '',
  password: '',
};

interface Props {
  isLogin?: boolean;
}

const AuthFormContainer = ({ isLogin = false }: Props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validate={(values) => {
          const errors = {} as IValues;
          if (!isLogin && !values.username) {
            errors.username = '필수 입력사항입니다. ';
          }
          if (!values.email) {
            errors.email = '필수 입력사항입니다. ';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = '이메일 양식에 맞지 않습니다. ';
          }
          if (!values.password) {
            errors.password = '필수 입력사항입니다. ';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            if (isLogin) {
              dispatch(loginFn(values, history));
            } else {
              if (values.username) {
                dispatch(registerFn(values, history));
              }
            }
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => <AuthFormPresenter isLogin={isLogin} isSubmitting={isSubmitting} />}
      </Formik>
    </div>
  );
};

export default AuthFormContainer;
