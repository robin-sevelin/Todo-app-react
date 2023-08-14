import { Todo } from '../models/Todo';
import { AppTodo } from './AppTodo';

interface IProps {
  todos: Todo[];
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

export const AppTodos = (props: IProps) => {
  const { todos, onDelete, onToggle } = props;

  const deleteTodo = (todoId: number) => {
    onDelete(todoId);
  };

  const toggleTodo = (todoId: number) => {
    onToggle(todoId);
  };

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <AppTodo todo={todo} onDelete={deleteTodo} onToggle={toggleTodo} />
        </div>
      ))}
    </>
  );
};
