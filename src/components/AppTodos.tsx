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

  return (
    <div>
      {' '}
      <input
        type='text'
        placeholder='new todo'
        value={input}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Create Todo</button>
      <AppTodo todos={todos} />
    </div>
  );
};
