import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logoutFn } from '../store/actions/v1/auth.action';

interface Props {}

const Logout = (props: Props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(logoutFn(history));
  }, [dispatch, history]);
  return <div>Logout ...</div>;
};

export default Logout;
