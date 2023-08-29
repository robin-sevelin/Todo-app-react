import { ReactNode, createContext, useReducer } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { TodoReducer } from '../reducers/todoReducer';
import { Todo } from '../models/Todo';
import { useGetTodos } from '../hooks/useGetTodos';

interface IContext {
  todos: Todo[];
  add: (text: string) => void;
  remove: (id: number) => void;
  toggle: (id: number) => void;
}

interface TodoLogicProps {
  children: ReactNode;
}
export const TodoContext = createContext<IContext>({
  todos: [],
  add: (text: string) => {
    console.log(text);
  },
  remove: (id: number) => {
    console.log(id);
  },
  toggle: (id: number) => {
    console.log(id);
  },
});

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
