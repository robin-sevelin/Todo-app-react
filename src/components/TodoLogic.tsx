import { ReactNode, useReducer } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { TodoReducer } from '../reducers/todoReducer';
import { Todo } from '../models/Todo';
import { useGetTodos } from '../hooks/useGetTodos';
import { IContext, TodoContext } from '../context/TodoContext';

interface TodoLogicProps {
  children: ReactNode;
}

const TodoLogic = ({ children }: TodoLogicProps) => {
  const [storedTodos, setStoredTodos] = useLocalStorage<Todo[]>('todos', []);
  const [todos, dispatch] = useReducer(TodoReducer, storedTodos);

  const contextValue: IContext = {
    todos: todos,
    toggle: (id: number) => {
      dispatch({ type: 'TOGGLED', payload: id.toString() });
    },
    add: (text: string) => {
      dispatch({ type: 'ADDED', payload: text });
    },
    remove: (id: number) => {
      dispatch({ type: 'REMOVED', payload: id.toString() });
    },
  };

  useGetTodos(todos, setStoredTodos);

  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  );
};

export default TodoLogic;
