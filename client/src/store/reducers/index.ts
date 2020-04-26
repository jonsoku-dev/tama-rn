import { combineReducers } from 'redux';
import authReducer from './v1/auth.reducer';
import studyReducer from './v1/study.reducer';
import studyTodoReducer from './v1/studyTodo.reducer';

const reducer = combineReducers({
  authState: authReducer,
  studyState: studyReducer,
  studyTodoState: studyTodoReducer,
});

export type IRootState = ReturnType<typeof reducer>;

export default reducer;
