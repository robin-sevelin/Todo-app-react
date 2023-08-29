import { useContext } from 'react';
import { AppTodo } from './AppTodo';
import { TodoContext } from '../components/TodoLogic';

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
