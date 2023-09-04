import { useReducer } from 'react';
import '../src/App.css';
import { AppHeader } from './components/AppHeader';
import { AppMain } from './components/AppMain';
import { useGetTodos } from './hooks/useGetTodos';
import { useLocalStorage } from './hooks/useLocalStorage';
import { Todo } from './models/Todo';
import { TodosReducer } from './reducers/TodosReducer';
import { TodoContext } from './context/TodoContext';

function App() {
  const [storedTodos, setStoredTodos] = useLocalStorage<Todo[]>('todos', []);
  const [todos, dispatch] = useReducer(TodosReducer, storedTodos);

  useGetTodos(todos, setStoredTodos);

  return (
    <>
      <TodoContext.Provider value={{ todos, dispatch }}>
        <AppHeader />
        <AppMain />
      </TodoContext.Provider>
    </>
  );
}

export default App;
