import { RouteComponentProps } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ThunkAction } from 'redux-thunk';
import { UNLIKE_STUDY_SUCCESS } from './../../store-types';
import { API } from '../../../utils/axios';
import { IRootState } from '../../reducers/index';
import {
  LIKE_STUDY_FAIL,
  LIKE_STUDY_PENDING,
  LIKE_STUDY_SUCCESS,
  UnlikeStudyPendingAction,
  UnlikeStudySuccessAction,
  UnlikeStudyFailAction,
  UNLIKE_STUDY_PENDING,
  UNLIKE_STUDY_FAIL,
} from '../../store-types';
import {
  LikeStudyPendingAction,
  LikeStudySuccessAction,
  LikeStudyFailAction,
} from '../../store-types';
import {
  JOIN_STUDY_FAIL,
  JOIN_STUDY_PENDING,
  JOIN_STUDY_SUCCESS,
  QUIT_STUDY_PENDING,
  QUIT_STUDY_SUCCESS,
  QUIT_STUDY_FAIL,
  GET_STUDIES_FAIL,
  GET_STUDIES_PENDING,
  GET_STUDIES_SUCCESS,
  JoinStudyPendingAction,
  JoinStudySuccessAction,
  JoinStudyFailAction,
  GetStudiesPendingAction,
  GetStudiesSuccessAction,
  GetStudiesFailAction,
  GET_STUDY_CATEGORIES_PENDING,
  GET_STUDY_CATEGORIES_SUCCESS,
  GET_STUDY_CATEGORIES_FAIL,
  CREATE_STUDY_CATEGORY_PENDING,
  CREATE_STUDY_CATEGORY_SUCCESS,
  CREATE_STUDY_CATEGORY_FAIL,
  GetStudyCategoriesPendingAction,
  GetStudyCategoriesSuccessAction,
  GetStudyCategoriesFailAction,
  CreateStudyPendingAction,
  CreateStudySuccessAction,
  CreateStudyFailAction,
  QuitStudyPendingAction,
  QuitStudySuccessAction,
  QuitStudyFailAction,
  GET_STUDY_PENDING,
  GET_STUDY_SUCCESS,
  GET_STUDY_FAIL,
  GetStudyPendingAction,
  GetStudySuccessAction,
  GetStudyFailAction,
} from '../../store-types';

export const getCategories = (): ThunkAction<
  Promise<void>,
  IRootState,
  undefined,
  GetStudyCategoriesPendingAction | GetStudyCategoriesSuccessAction | GetStudyCategoriesFailAction
> => async (dispatch) => {
  // pending
  dispatch({
    type: GET_STUDY_CATEGORIES_PENDING,
    payload: true,
  });
  try {
    const { data } = await API.get('/v1/studycategory');
    setTimeout(() => {
      dispatch({
        type: GET_STUDY_CATEGORIES_SUCCESS,
        payload: data,
      });
    }, 1000);
  } catch (err) {
    dispatch({
      type: GET_STUDY_CATEGORIES_FAIL,
      payload: err.response.data,
    });
    toast.error(err.response.data.error);
  }
};

export const createStudy = (
  formData: any,
  history: RouteComponentProps<any>['history'],
): ThunkAction<
  Promise<void>,
  IRootState,
  undefined,
  CreateStudyPendingAction | CreateStudySuccessAction | CreateStudyFailAction
> => async (dispatch) => {
  // pending
  dispatch({
    type: CREATE_STUDY_CATEGORY_PENDING,
    payload: true,
  });
  try {
    const { data } = await API.post('/v1/study', formData);
    setTimeout(() => {
      dispatch({
        type: CREATE_STUDY_CATEGORY_SUCCESS,
        payload: data,
      });
    }, 1000);
    history.push('/');
  } catch (err) {
    dispatch({
      type: CREATE_STUDY_CATEGORY_FAIL,
      payload: err.response.data,
    });
    toast.error(err.response.data.error);
  }
};

export const getStudies = (): ThunkAction<
  Promise<void>,
  IRootState,
  undefined,
  GetStudiesPendingAction | GetStudiesSuccessAction | GetStudiesFailAction
> => async (dispatch) => {
  // pending
  dispatch({
    type: GET_STUDIES_PENDING,
    payload: true,
  });
  try {
    const { data } = await API.get('/v1/study');
    setTimeout(() => {
      dispatch({
        type: GET_STUDIES_SUCCESS,
        payload: data,
      });
    }, 1000);
  } catch (err) {
    dispatch({
      type: GET_STUDIES_FAIL,
      payload: err.response.data,
    });
    toast.error(err.response.data.error);
  }
};

export const joinStudy = (
  studyId: string,
): ThunkAction<
  Promise<void>,
  IRootState,
  undefined,
  JoinStudyPendingAction | JoinStudySuccessAction | JoinStudyFailAction
> => async (dispatch) => {
  // pending
  dispatch({
    type: JOIN_STUDY_PENDING,
    payload: true,
  });
  try {
    const { data } = await API.put(`/v1/study/${studyId}/join`);
    setTimeout(() => {
      dispatch({
        type: JOIN_STUDY_SUCCESS,
        payload: data,
      });
    }, 1000);
  } catch (err) {
    dispatch({
      type: JOIN_STUDY_FAIL,
      payload: err.response.data,
    });
    toast.error(err.response.data.error);
  }
};

export const quitStudy = (
  studyId: string,
): ThunkAction<
  Promise<void>,
  IRootState,
  undefined,
  QuitStudyPendingAction | QuitStudySuccessAction | QuitStudyFailAction
> => async (dispatch) => {
  // pending
  dispatch({
    type: QUIT_STUDY_PENDING,
    payload: true,
  });
  try {
    const { data } = await API.put(`/v1/study/${studyId}/quit`);
    setTimeout(() => {
      dispatch({
        type: QUIT_STUDY_SUCCESS,
        payload: data,
      });
    }, 1000);
  } catch (err) {
    dispatch({
      type: QUIT_STUDY_FAIL,
      payload: err.response.data,
    });
    toast.error(err.response.data.error);
  }
};

export const getStudy = (
  studyId: string,
): ThunkAction<
  Promise<void>,
  IRootState,
  undefined,
  GetStudyPendingAction | GetStudySuccessAction | GetStudyFailAction
> => async (dispatch) => {
  // pending
  dispatch({
    type: GET_STUDY_PENDING,
    payload: true,
  });
  try {
    const { data } = await API.get(`/v1/study/${studyId}`);
    setTimeout(() => {
      dispatch({
        type: GET_STUDY_SUCCESS,
        payload: data,
      });
    }, 1000);
  } catch (err) {
    dispatch({
      type: GET_STUDY_FAIL,
      payload: err.response.data,
    });
    toast.error(err.response.data.error);
  }
};

export const likeStudy = (
  studyId: string,
): ThunkAction<
  Promise<void>,
  IRootState,
  undefined,
  LikeStudyPendingAction | LikeStudySuccessAction | LikeStudyFailAction
> => async (dispatch) => {
  // pending
  dispatch({
    type: LIKE_STUDY_PENDING,
    payload: true,
  });
  try {
    const { data } = await API.put(`/v1/study/${studyId}/like`);
    setTimeout(() => {
      dispatch({
        type: LIKE_STUDY_SUCCESS,
        payload: data,
      });
    }, 1000);
  } catch (err) {
    dispatch({
      type: LIKE_STUDY_FAIL,
      payload: err.response.data,
    });
    toast.error(err.response.data.error);
  }
};

export const unlikeStudy = (
  studyId: string,
): ThunkAction<
  Promise<void>,
  IRootState,
  undefined,
  UnlikeStudyPendingAction | UnlikeStudySuccessAction | UnlikeStudyFailAction
> => async (dispatch) => {
  // pending
  dispatch({
    type: UNLIKE_STUDY_PENDING,
    payload: true,
  });
  try {
    const { data } = await API.put(`/v1/study/${studyId}/unlike`);
    setTimeout(() => {
      dispatch({
        type: UNLIKE_STUDY_SUCCESS,
        payload: data,
      });
    }, 1000);
  } catch (err) {
    dispatch({
      type: UNLIKE_STUDY_FAIL,
      payload: err.response.data,
    });
    toast.error(err.response.data.error);
  }
};
