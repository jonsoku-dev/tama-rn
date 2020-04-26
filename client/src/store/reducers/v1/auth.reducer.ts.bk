import {
  AuthReducerActions,
  IAuthState,
  LOAD_USER,
  SIGN_IN,
  SIGN_UP,
  AUTH_ERROR,
} from '../../store-types';

const initialState: IAuthState = {
  isLoggedIn: false,
  currentUserId: null,
  error: null,
  loading: true,
};

export default (prevState: IAuthState = initialState, action: AuthReducerActions): IAuthState => {
  switch (action.type) {
    case LOAD_USER:
      return {
        ...prevState,
        isLoggedIn: true,
        currentUserId: action.payload.currentUserId,
        loading: false,
      };
    case SIGN_IN:
    case SIGN_UP:
      localStorage.setItem('token', action.payload.token);
      return { ...prevState, isLoggedIn: true, loading: false };
    case AUTH_ERROR:
      localStorage.removeItem('token');
      return {
        ...prevState,
        isLoggedIn: false,
        currentUserId: null,
        loading: false,
        error: action.payload.error,
      };
    default:
      return prevState;
  }
};
