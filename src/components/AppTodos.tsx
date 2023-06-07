import { ChangeEvent, useState } from 'react';
import { Todo } from '../models/Todo';
import { AppTodo } from './AppTodo';

export const AppTodos = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    const todo = new Todo(input, Math.random(), false);
    setTodos([...todos, todo]);
    setInput('');
  };

  const deleteTodo = (todoId: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
  };

  const toggleTodo = (todoId: number) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, isDone: !todo.isDone };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      {' '}
      <input
        type='text'
        placeholder='new todo'
        value={input}
        onChange={handleChange}
      />
      <button onClick={handleClick} disabled={input === ''}>
        Create Todo
      </button>
      <AppTodo todos={todos} onDelete={deleteTodo} onToggle={toggleTodo} />
    </div>
  );
};
