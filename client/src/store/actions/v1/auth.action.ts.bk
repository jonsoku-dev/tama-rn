import * as reactToastify from 'react-toastify';
import { ThunkAction } from 'redux-thunk';
import { API, setAuthToken } from '../../../utils/axios';
import { IRootState } from '../../reducers/index';
import {
  LOAD_USER,
  SIGN_IN,
  SIGN_UP,
  AUTH_ERROR,
  LoadUserAction,
  SignInAction,
  SignUpAction,
  AuthErrorAction,
} from '../../store-types';

// 유저 아이디 가져오기
export const loadUserFn = (): ThunkAction<
  Promise<void>,
  IRootState,
  undefined,
  LoadUserAction | AuthErrorAction
> => async (dispatch, getState) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  } else {
    dispatch({
      type: AUTH_ERROR,
      payload: {
        error: '로그인을 해주세요. ',
      },
    });
    return;
  }
  try {
    const res = await API.get('/v1/user/loaduser');
    const currentUserId: string = res.data.result;
    setTimeout(() => {
      dispatch({
        type: LOAD_USER,
        payload: {
          currentUserId,
        },
      });
    }, 500);
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: {
        error: err.response.data.error,
      },
    });
    reactToastify.toast.error(`비정상적인 접근으로 인해 3초후에 새로고침됩니다. `, {
      autoClose: 3000,
    });
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  }
};

// 로그인
export const signinFn = (
  formData: any,
): ThunkAction<Promise<void>, IRootState, undefined, SignInAction | AuthErrorAction> => async (
  dispatch,
  getState,
) => {
  try {
    const res = await API.post('/v1/user/signin', formData);
    const token: string = res.data.result;
    dispatch({
      type: SIGN_IN,
      payload: {
        token,
      },
    });
    reactToastify.toast.success('로그인 성공');
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: {
        error: err.response.data.error,
      },
    });
    reactToastify.toast.error(err.response.data.error);
  }
};

// 회원가입
export const signupFn = (
  formData: any,
): ThunkAction<Promise<void>, IRootState, undefined, SignUpAction | AuthErrorAction> => async (
  dispatch,
  getState,
) => {
  try {
    const res = await API.post('/v1/user/signup', formData);
    const token: string = res.data.result;
    dispatch({
      type: SIGN_UP,
      payload: {
        token,
      },
    });
    reactToastify.toast.success('회원가입이 완료되었습니다. ');
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: {
        error: err.response.data.error,
      },
    });
    reactToastify.toast.error(err.response.data.error);
  }
};
