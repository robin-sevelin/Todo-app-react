import { ChangeEvent, useState } from 'react';

interface IFormProps {
  onAddTodo: (text: string) => void;
}

export const AppForm = ({ onAddTodo }: IFormProps) => {
  const [input, setInput] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    onAddTodo(input);
    setInput('');
  };
  return (
    <>
      <input
        type='text'
        placeholder='new todo'
        value={input}
        onChange={handleChange}
      />
      <button onClick={handleClick} disabled={input === ''}>
        Create Todo
      </button>
    </>
  );
};
