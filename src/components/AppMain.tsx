import { AppForm } from './AppForm';
import { AppTodos } from './AppTodos';
import { Todo } from '../models/Todo';
import { useLocalStorage } from '../hooks.ts/useLocalStorage';

export const AppMain = () => {
  const [todos, setTodos] = useLocalStorage<Todo[]>('todos', []);

  const addTodo = (text: string) => {
    const newTodo = [...todos, new Todo(text, Math.random(), false)];
    setTodos(newTodo);
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
    <main>
      <AppForm onAddTodo={addTodo} />
      <AppTodos todos={todos} onDelete={deleteTodo} onToggle={toggleTodo} />
    </main>
  );
};
