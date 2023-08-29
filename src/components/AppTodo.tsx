import { useContext } from 'react';
import { Todo } from '../models/Todo';
import { TodoContext } from '../components/TodoLogic';

interface ITodoPropos {
  todo: Todo;
}

export const AppTodo = ({ todo }: ITodoPropos) => {
  const { toggle, remove } = useContext(TodoContext);

  const removeTodo = (id: number) => {
    remove(id);
  };

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
        onClick={() => removeTodo(todo.id)}
      >
        Delete
      </button>
    </div>
  );
};
