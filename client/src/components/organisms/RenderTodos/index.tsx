import ClearIcon from '@material-ui/icons/Clear';
import moment from 'moment';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { deleteTodo, updateTodo } from '../../../store/actions/v1/studyTodo.action';
import { IRootState } from '../../../store/reducers/index';
import { IStudyTodo } from '../../../store/store-types';

interface Props {
  todos: IStudyTodo[];
}

const RenderTodos = ({ todos }: Props) => {
  const match = useRouteMatch<{ studyId: string }>();
  const dispatch = useDispatch();
  const { user } = useSelector(({ authState }: IRootState) => authState);

  const onClickTodoComplete = useCallback(
    (todoId: string, currentTodoStatus: boolean) => {
      dispatch(updateTodo(match.params.studyId, todoId, currentTodoStatus));
    },
    [dispatch, match.params.studyId],
  );

  const onClickTodoDelete = useCallback(
    (event: React.MouseEvent<HTMLDivElement>, todoId: string) => {
      event.stopPropagation();
      dispatch(deleteTodo(match.params.studyId, todoId));
    },
    [dispatch, match.params.studyId],
  );

  return (
    <Wrapper>
      {todos.map((todo) => {
        return (
          <Item
            key={todo._id}
            onClick={() => onClickTodoComplete(todo._id, todo.completed)}
            isCompleted={todo.completed}
          >
            <h4>{todo.content}</h4>
            <span>{moment(todo.updatedAt).fromNow()}</span>
            {user && todo.user._id === user._id && (
              <ClearIconBox onClick={(event) => onClickTodoDelete(event, todo._id)}>
                <ClearIcon />
              </ClearIconBox>
            )}
          </Item>
        );
      })}
    </Wrapper>
  );
};

export default RenderTodos;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: ${(props) => props.theme.space * 3}px;
`;

const Item = styled.div<{ isCompleted: boolean }>`
  ${(props) => {
    const { theme, isCompleted } = props;
    return css`
      background-color: ${isCompleted ? theme.colors.base.black : theme.colors.base.white};
      border-radius: ${theme.space}px;
      color: ${isCompleted ? theme.colors.base.white : theme.colors.base.black};
      border: 1px solid black;
      box-sizing: border-box;
      padding: ${`${theme.space / 2}px ${theme.space}px`};
      margin: ${theme.space / 2}px;
      display: flex;
      align-items: center;
      span {
        margin-left: ${theme.space}px;
      }
    `;
  }}
`;

const ClearIconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-sizing: border-box;
  padding-left: ${(props) => props.theme.space / 2}px;
`;
