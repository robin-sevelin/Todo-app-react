import { ChangeEvent, FormEvent, useState } from 'react';

interface IFormProps {
  onAddTodo: (text: string) => void;
}

export const AppForm = ({ onAddTodo }: IFormProps) => {
  const [input, setInput] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onAddTodo(input);
    setInput('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='new todo'
        value={input}
        onChange={handleChange}
      />
      <button disabled={input === ''}>Create Todo</button>
    </form>
  );
};
