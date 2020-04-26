import { toast } from 'react-toastify';
import { ThunkAction } from 'redux-thunk';
import { API } from '../../../utils/axios';
import { IRootState } from '../../reducers/index';
import {
  CREATE_STUDY_TODO_PENDING,
  CREATE_STUDY_TODO_SUCCESS,
  CREATE_STUDY_TODO_FAIL,
} from '../../store-types';
import {
  CreateStudyTodoPendingAction,
  CreateStudyTodoSuccessAction,
  CreateStudyTodoFailAction,
} from '../../store-types';
import {
  DeleteStudyTodoPendingAction,
  DeleteStudyTodoSuccessAction,
  DeleteStudyTodoFailAction,
  DELETE_STUDY_TODO_PENDING,
  DELETE_STUDY_TODO_SUCCESS,
  DELETE_STUDY_TODO_FAIL,
} from '../../store-types';
import {
  UPDATE_STUDY_TODO_PENDING,
  UPDATE_STUDY_TODO_SUCCESS,
  UPDATE_STUDY_TODO_FAIL,
} from '../../store-types';
import {
  UpdateStudyTodoPendingAction,
  UpdateStudyTodoSuccessAction,
  UpdateStudyTodoFailAction,
} from '../../store-types';
import {
  GET_STUDY_TODOS_PENDING,
  GET_STUDY_TODOS_SUCCESS,
  GET_STUDY_TODOS_FAIL,
} from '../../store-types';
import {
  GetStudyTodosPendingAction,
  GetStudyTodosSuccessAction,
  GetStudyTodosFailAction,
} from '../../store-types';

export const getStudyTodos = (
  studyId: string,
): ThunkAction<
  Promise<void>,
  IRootState,
  undefined,
  GetStudyTodosPendingAction | GetStudyTodosSuccessAction | GetStudyTodosFailAction
> => async (dispatch) => {
  // pending
  dispatch({
    type: GET_STUDY_TODOS_PENDING,
    payload: true,
  });
  try {
    const { data } = await API.get(`/v1/study/${studyId}/todo`);
    setTimeout(() => {
      dispatch({
        type: GET_STUDY_TODOS_SUCCESS,
        payload: data,
      });
    }, 200);
  } catch (err) {
    dispatch({
      type: GET_STUDY_TODOS_FAIL,
      payload: err.response.data,
    });
    toast.error(err.response.data.error);
  }
};

export const updateTodo = (
  studyId: string,
  todoId: string,
  currentTodoStatus: boolean,
): ThunkAction<
  Promise<void>,
  IRootState,
  undefined,
  UpdateStudyTodoPendingAction | UpdateStudyTodoSuccessAction | UpdateStudyTodoFailAction
> => async (dispatch) => {
  // pending
  dispatch({
    type: UPDATE_STUDY_TODO_PENDING,
    payload: true,
  });
  try {
    const { data } = await API.put(`/v1/study/${studyId}/todo/${todoId}`, {
      completed: !currentTodoStatus,
    });
    setTimeout(() => {
      dispatch({
        type: UPDATE_STUDY_TODO_SUCCESS,
        payload: data,
      });
    }, 200);
  } catch (err) {
    dispatch({
      type: UPDATE_STUDY_TODO_FAIL,
      payload: err.response.data,
    });
    toast.error(err.response.data.error);
  }
};

export const deleteTodo = (
  studyId: string,
  todoId: string,
): ThunkAction<
  Promise<void>,
  IRootState,
  undefined,
  DeleteStudyTodoPendingAction | DeleteStudyTodoSuccessAction | DeleteStudyTodoFailAction
> => async (dispatch) => {
  // pending
  dispatch({
    type: DELETE_STUDY_TODO_PENDING,
    payload: true,
  });
  try {
    const { data } = await API.delete(`/v1/study/${studyId}/todo/${todoId}`);
    setTimeout(() => {
      dispatch({
        type: DELETE_STUDY_TODO_SUCCESS,
        payload: data,
      });
    }, 200);
  } catch (err) {
    dispatch({
      type: DELETE_STUDY_TODO_FAIL,
      payload: err.response.data,
    });
    toast.error(err.response.data.error);
  }
};

export const createTodo = (
  studyId: string,
  content: string,
): ThunkAction<
  Promise<void>,
  IRootState,
  undefined,
  CreateStudyTodoPendingAction | CreateStudyTodoSuccessAction | CreateStudyTodoFailAction
> => async (dispatch) => {
  // pending
  dispatch({
    type: CREATE_STUDY_TODO_PENDING,
    payload: true,
  });
  try {
    const { data } = await API.post(`/v1/study/${studyId}/todo`, {
      content,
    });
    setTimeout(() => {
      dispatch({
        type: CREATE_STUDY_TODO_SUCCESS,
        payload: data,
      });
    }, 200);
  } catch (err) {
    dispatch({
      type: CREATE_STUDY_TODO_FAIL,
      payload: err.response.data,
    });
    toast.error(err.response.data.error);
  }
};
