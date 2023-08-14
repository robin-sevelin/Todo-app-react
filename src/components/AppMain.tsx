import { useEffect, useState } from 'react';
import { AppForm } from './AppForm';
import { AppTodos } from './AppTodos';
import { Todo } from '../models/Todo';

export const AppMain = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const inLocalstorage = localStorage.getItem('todos');

    if (inLocalstorage) {
      setTodos(JSON.parse(inLocalstorage));
    }
  }, []);

  const addTodo = (text: string) => {
    const newTodo = [...todos, new Todo(text, Math.random(), false)];
    setTodos(newTodo);

    localStorage.setItem('todos', JSON.stringify(newTodo));
  };

  const deleteTodo = (todoId: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const toggleTodo = (todoId: number) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, isDone: !todo.isDone };
      }
      return todo;
    });
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };
  return (
    <main>
      <AppForm onAddTodo={addTodo} />
      <AppTodos todos={todos} onDelete={deleteTodo} onToggle={toggleTodo} />
    </main>
  );
};
