import { AppTodo } from './AppTodo';
import { ITodoProps } from '../models/ITodoProps';

export const AppTodos = (props: ITodoProps) => {
  const { todos, onDelete, onToggle } = props;

  const deleteTodo = (todoId: number) => {
    onDelete(todoId);
  };

  const toggleTodo = (todoId: number) => {
    onToggle(todoId);
  };

  return (
    <div>
      <AppTodo todos={todos} onDelete={deleteTodo} onToggle={toggleTodo} />
    </div>
  );
};
