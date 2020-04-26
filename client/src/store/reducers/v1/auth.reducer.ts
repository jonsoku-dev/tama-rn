import {
  REGISTER,
  AUTH_ERROR,
  AuthReducerActions,
  IAuthState,
  LOAD_USER,
  LOGOUT,
  LOGIN,
} from '../../store-types';

const initialState: IAuthState = {
  isLoggedIn: false,
  user: null,
  error: null,
  loading: true,
};

export default (prevState: IAuthState = initialState, action: AuthReducerActions) => {
  switch (action.type) {
    case LOAD_USER:
      return {
        ...prevState,
        loading: false,
        isLoggedIn: true,
        user: action.payload.user,
      };
    case LOGIN:
      return {
        ...prevState,
        loading: false,
        isLoggedIn: true,
        user: action.payload.user,
      };
    case LOGOUT:
      return {
        ...initialState,
        loading: false,
      };
    case REGISTER:
      return {
        ...initialState,
        loading: false,
      };
    case AUTH_ERROR:
      return {
        ...prevState,
        loading: false,
        error: action.payload.error,
      };
    default:
      return prevState;
  }
};
