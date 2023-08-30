import { useContext } from 'react';
import { Todo } from '../models/Todo';
import { TodoContext } from '../context/TodoContext';
import { GreenButton, RedButton } from '../styled/Buttons';

interface ITodoPropos {
  todo: Todo;
}

export const AppTodo = ({ todo }: ITodoPropos) => {
  const { toggle, remove } = useContext(TodoContext);

  return (
    <div className={todo.isDone ? 'done' : ''}>
      {todo.name}
      <GreenButton onClick={() => toggle(todo.id)}>Toggle done</GreenButton>
      <RedButton onClick={() => remove(todo.id)}>Delete</RedButton>
    </div>
  );
};
