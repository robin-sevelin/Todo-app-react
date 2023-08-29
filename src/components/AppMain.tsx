import { AppForm } from './AppForm';
import { AppTodos } from './AppTodos';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useReducer } from 'react';
import { Todo } from '../models/Todo';
import { TodoReducer } from '../reducers/todoReducer';
import { useGetTodos } from '../hooks/useGetTodos';

export const AppMain = () => {
  const [storedTodos, setStoredTodos] = useLocalStorage<Todo[]>('todos', []);
  const [todos, dispatch] = useReducer(TodoReducer, storedTodos);

  const addTodo = (text: string) => {
    dispatch({ type: 'ADDED', payload: text });
  };

  const deleteTodo = (todoId: number) => {
    dispatch({ type: 'REMOVED', payload: todoId.toString() });
  };

  const toggleTodo = (todoId: number) => {
    dispatch({ type: 'TOGGLED', payload: todoId.toString() });
  };

  useGetTodos(todos, setStoredTodos);

  return (
    <main>
      <AppForm onAddTodo={addTodo} />
      <AppTodos todos={todos} onDelete={deleteTodo} onToggle={toggleTodo} />
    </main>
  );
};
