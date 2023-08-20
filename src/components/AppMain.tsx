import { AppForm } from './AppForm';
import { AppTodos } from './AppTodos';
import { useLocalStorage } from '../hooks.ts/useLocalStorage';
import { useEffect, useReducer } from 'react';
import { Todo } from '../models/Todo';
import { todoReducer } from '../hooks.ts/todoReducer';

export const AppMain = () => {
  const [storedTodos, setStoredTodos] = useLocalStorage<Todo[]>('todos', []);
  const [todos, dispatch] = useReducer(todoReducer, storedTodos);

  useEffect(() => {
    if (todos.length !== 0) {
      setStoredTodos(todos);
    }
  });

  const addTodo = (text: string) => {
    dispatch({ type: 'add_todo', text });
  };

  const deleteTodo = (todoId: number) => {
    dispatch({ type: 'delete_todo', todoId });
  };

  const toggleTodo = (todoId: number) => {
    dispatch({ type: 'toggle_todo', todoId });
  };
  return (
    <main>
      <AppForm onAddTodo={addTodo} />
      <AppTodos todos={todos} onDelete={deleteTodo} onToggle={toggleTodo} />
    </main>
  );
};
