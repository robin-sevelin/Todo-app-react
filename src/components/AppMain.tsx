import { useState } from 'react';
import { IProps } from '../models/IComponentProps';
import { AppForm } from './AppForm';
import { AppTodos } from './AppTodos';
import { Todo } from '../models/Todo';

export const AppMain = (props: IProps) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    setTodos([...todos, new Todo(text, Math.random(), false)]);
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
      <h2>{props.content}</h2>
      <AppForm onAddTodo={addTodo} />
      <AppTodos todos={todos} onDelete={deleteTodo} onToggle={toggleTodo} />
    </main>
  );
};
