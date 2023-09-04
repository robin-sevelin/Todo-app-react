import { FormEvent, useContext, useState } from 'react';
import { TodoContext } from '../context/TodoContext';
import { ActionType } from '../reducers/TodosReducer';

export const AppForm = () => {
  const [input, setInput] = useState('');
  const { dispatch } = useContext(TodoContext);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch({ type: ActionType.ADDED, payload: input });
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
