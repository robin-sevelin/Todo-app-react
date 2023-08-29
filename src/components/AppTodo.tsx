import { useContext } from 'react';
import { Todo } from '../models/Todo';
import { TodoContext } from '../context/TodoContext';

interface ITodoPropos {
  todo: Todo;
}

export const AppTodo = ({ todo }: ITodoPropos) => {
  const { toggle, remove } = useContext(TodoContext);

  return (
    <div className={todo.isDone ? 'done' : ''}>
      {todo.name}
      <button
        style={{ backgroundColor: 'lightgreen' }}
        onClick={() => toggle(todo.id)}
      >
        Toggle done
      </button>
      <button
        style={{ backgroundColor: 'red' }}
        onClick={() => remove(todo.id)}
      >
        Delete
      </button>
    </div>
  );
};
