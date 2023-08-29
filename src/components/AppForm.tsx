import { FormEvent, useContext, useState } from 'react';
import { TodoContext } from '../context/TodoContext';

export const AppForm = () => {
  const [input, setInput] = useState('');
  const { add } = useContext(TodoContext);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    add(input);
    setInput('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='new todo'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button style={{ backgroundColor: 'lightblue' }} disabled={input === ''}>
        Create Todo
      </button>
    </form>
  );
};
