import React, { FC, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { IRootState } from '../../store/reducers/index';

interface IChildProps {}

export default (ChildComponent: any, isRequireAuth: boolean) => {
  const ComposeComponent: FC<IChildProps> = (props) => {
    const history = useHistory();
    const authState = useSelector(({ authState }: IRootState) => authState);

    const handleRoutingFn = useCallback(() => {
      if (isRequireAuth) {
        if (!authState.loading && !authState.isLoggedIn) {
          history.push('/'); // Todo : login modal 로 대체
        }
      } else {
        if (!authState.loading && authState.isLoggedIn) {
          history.push('/'); // Todo : 비정상적인 페이지 접속 component -> 3초후에 홈으로 redirection
        }
      }
    }, [authState.loading, authState.isLoggedIn, history]);

    useEffect(() => {
      handleRoutingFn();
    }, [handleRoutingFn]);

    if (authState.loading) return <div>Auth Loading ... </div>;

    return <ChildComponent {...props} />;
  };

  return ComposeComponent;
};
