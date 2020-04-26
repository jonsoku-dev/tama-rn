import React, { useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { toast } from 'react-toastify';
import styled, { css } from 'styled-components';
import { createTodo } from '../../../store/actions/v1/studyTodo.action';
import { IRootState } from '../../../store/reducers/index';
import { IParticipant } from '../../../store/store-types';

interface Props {
  members: IParticipant[];
}

const TodoForm = ({ members }: Props) => {
  const match = useRouteMatch<{ studyId: string }>();
  const { user } = useSelector(({ authState }: IRootState) => authState);
  const dispatch = useDispatch();
  const inputEl = useRef<HTMLInputElement>(null);

  const handleKeyPress = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        if (inputEl.current) {
          if (inputEl.current.value.length > 30) {
            toast.warn('30자 이내로 입력해주세요. ');
            return;
          } else {
            dispatch(createTodo(match.params.studyId, inputEl.current.value));
            inputEl.current.value = '';
          }
        }
      }
    },
    [dispatch, match.params.studyId],
  );

  if (!!!members.find((member) => member._id === user?._id)) return null;

  return (
    <Wrapper>
      <Input ref={inputEl} onKeyPress={handleKeyPress} />
    </Wrapper>
  );
};

export default TodoForm;

const Wrapper = styled.section`
  ${(props) => {
    const { theme } = props;
    return css`
      margin-top: ${theme.space * 2}px;
    `;
  }}
`;

const Input = styled.input.attrs({
  type: 'text',
  placeholder: '스터디 Todo를 입력해주세요 ...',
})`
  width: 100%;
  height: 40px;
  border: 1px solid #eeeeee;
  box-sizing: border-box;
  padding-left: 16px;
  border-radius: 4px;
`;
