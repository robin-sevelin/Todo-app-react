import { useContext } from 'react';
import { AppTodo } from './AppTodo';
import { TodoContext } from '../context/TodoContext';

export const AppTodos = () => {
  const { todos } = useContext(TodoContext);

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <AppTodo todo={todo} />
        </div>
      ))}
    </>
  );
};
