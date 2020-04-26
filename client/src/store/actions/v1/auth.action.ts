import { RouteComponentProps } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ThunkAction } from 'redux-thunk';
import { API } from '../../../utils/axios';
import { IRootState } from '../../reducers/index';
import {
  AUTH_ERROR,
  AuthErrorAction,
  LOAD_USER,
  LoadUserAction,
  LoginAction,
  LogoutAction,
  LOGOUT,
  LOGIN,
  REGISTER,
  RegisterAction,
} from '../../store-types';

export const loadUserFn = (): ThunkAction<
  Promise<void>,
  IRootState,
  undefined,
  LoadUserAction | AuthErrorAction
> => async (dispatch, getState) => {
  if (!window.localStorage.getItem('token')) {
    dispatch({
      type: AUTH_ERROR,
      payload: {
        error: '토큰이 존재하지 않습니다. ',
      },
    });
    return;
  } else {
    try {
      const response = await API.get('/v1/user/me');
      dispatch({
        type: LOAD_USER,
        payload: {
          user: response.data,
        },
      });
    } catch (err) {
      dispatch({
        type: AUTH_ERROR,
        payload: {
          error: '유저 정보를 불러오는데에 실패하였습니다. ',
        },
      });
      toast.error(err.response.data);
      if (err.response.data) {
        window.localStorage.removeItem('token');
      }
    }
  }
};

export const loginFn = (
  values: {
    email: string;
    password: string;
  },
  history: RouteComponentProps<any>['history'],
): ThunkAction<Promise<void>, IRootState, undefined, LoginAction | AuthErrorAction> => async (
  dispatch,
  getState,
) => {
  try {
    const response = await API.post('/v1/user/login', values);
    window.localStorage.setItem('token', response.data.token);
    dispatch({
      type: LOGIN,
      payload: {
        user: response.data,
      },
    });
    toast.success('로그인 성공!');
    history.push('/');
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: {
        error: err,
      },
    });
    toast.error(err.response.data.error);
  }
};

export const registerFn = (
  values: {
    username: string;
    email: string;
    password: string;
  },
  history: RouteComponentProps<any>['history'],
): ThunkAction<Promise<void>, IRootState, undefined, RegisterAction | AuthErrorAction> => async (
  dispatch,
  getState,
) => {
  try {
    await API.post('/v1/user/register', values);
    dispatch({
      type: REGISTER,
    });
    toast.success('회원가입 성공! 로그인페이지로 이동합니다. ');
    history.push('/login');
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: {
        error: err,
      },
    });
    toast.error(err.response.data.error);
  }
};

export const logoutFn = (
  history: RouteComponentProps<any>['history'],
): ThunkAction<Promise<void>, IRootState, undefined, LogoutAction | AuthErrorAction> => async (
  dispatch,
  getState,
) => {
  try {
    window.localStorage.removeItem('token');
    dispatch({
      type: LOGOUT,
    });
    toast.success('로그아웃 되었습니다.');
    history.push('/');
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: {
        error: err,
      },
    });
    toast.error(err);
  }
};
