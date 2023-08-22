import { Todo } from '../models/Todo';

interface IProps {
  todo: Todo;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

export const AppTodo = (props: IProps) => {
  const { todo, onDelete, onToggle } = props;

  const handleDelete = (todoId: number) => {
    onDelete(todoId);
  };

  const handleToggle = (todoId: number) => {
    onToggle(todoId);
  };

  return (
    <div className={todo.isDone ? 'done' : ''}>
      {todo.name}
      <button
        style={{ backgroundColor: 'lightgreen' }}
        onClick={() => handleToggle(todo.id)}
      >
        Toggle done
      </button>
      <button
        style={{ backgroundColor: 'red' }}
        onClick={() => handleDelete(todo.id)}
      >
        Delete
      </button>
    </div>
  );
};
