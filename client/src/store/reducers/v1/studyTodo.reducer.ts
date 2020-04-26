import { UPDATE_STUDY_TODO_PENDING } from './../../store-types';
import { CREATE_STUDY_TODO_SUCCESS } from '../../store-types';
import {
  CREATE_STUDY_TODO_FAIL,
  CREATE_STUDY_TODO_PENDING,
  DELETE_STUDY_TODO_SUCCESS,
  UPDATE_STUDY_TODO_SUCCESS,
} from '../../store-types';
import {
  DELETE_STUDY_TODO_FAIL,
  DELETE_STUDY_TODO_PENDING,
  UPDATE_STUDY_TODO_FAIL,
} from '../../store-types';
import {
  GET_STUDY_TODOS_FAIL,
  GET_STUDY_TODOS_PENDING,
  GET_STUDY_TODOS_SUCCESS,
  IStudyTodoState,
  StudyTodoReducerActions,
} from '../../store-types';

const initialState: IStudyTodoState = {
  todos: [],
  error: null,
  loading: true,
};

export default (prevState: IStudyTodoState = initialState, action: StudyTodoReducerActions) => {
  switch (action.type) {
    case GET_STUDY_TODOS_PENDING:
    case UPDATE_STUDY_TODO_PENDING:
    case DELETE_STUDY_TODO_PENDING:
    case CREATE_STUDY_TODO_PENDING:
      return {
        ...prevState,
        loading: action.payload,
      };
    case GET_STUDY_TODOS_SUCCESS:
      return {
        ...prevState,
        loading: false,
        todos: action.payload,
      };
    case UPDATE_STUDY_TODO_SUCCESS:
      return {
        ...prevState,
        loading: false,
        todos: prevState.todos.map((todo) =>
          todo._id === action.payload._id ? action.payload : todo,
        ),
      };
    case DELETE_STUDY_TODO_SUCCESS:
      return {
        ...prevState,
        loading: false,
        todos: prevState.todos.filter((todo) => todo._id !== action.payload._id),
      };
    case CREATE_STUDY_TODO_SUCCESS:
      return {
        ...prevState,
        loading: false,
        todos: [...prevState.todos, action.payload],
      };
    case GET_STUDY_TODOS_FAIL:
    case UPDATE_STUDY_TODO_FAIL:
    case DELETE_STUDY_TODO_FAIL:
    case CREATE_STUDY_TODO_FAIL:
      return {
        ...prevState,
        loading: false,
        error: action.payload,
      };
    default:
      return prevState;
  }
};
