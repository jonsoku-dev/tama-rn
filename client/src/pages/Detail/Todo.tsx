import React from 'react';
import RenderTodos from '../../components/organisms/RenderTodos/index';
import TodoForm from '../../components/organisms/TodoForm/index';
import { IParticipant, IStudyTodo } from '../../store/store-types';

interface Props {
  todos: IStudyTodo[];
  members: IParticipant[];
}

const Todo = ({ todos, members }: Props) => {
  return (
    <div>
      <TodoForm members={members} />
      <RenderTodos todos={todos} />
    </div>
  );
};

export default Todo;
