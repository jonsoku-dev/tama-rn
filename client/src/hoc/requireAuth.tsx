import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { IRootState } from '../store/reducers';

interface IProps {}

export default (ChildComponent: any) => {
  const ComposeComponent = (props: IProps) => {
    const history = useHistory();
    const authState = useSelector(({ authState }: IRootState) => authState);
    useEffect(() => {
      if (!authState.loading && !authState.isLoggedIn) {
        history.push('/login');
        toast.info('로그인화면으로 이동합니다. ');
      }
    }, [authState.loading, authState.isLoggedIn, history]);
    return <ChildComponent {...props} />;
  };
  return ComposeComponent;
};
