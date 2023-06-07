import { ITodoProps } from '../models/ITodoProps';
import '../style/AppTodo.css';

export const AppTodo = (props: ITodoProps) => {
  const { todos, onDelete, onToggle } = props;

  const handleDelete = (todoId: number) => {
    onDelete(todoId);
  };

  const handleToggle = (todoId: number) => {
    onToggle(todoId);
  };

  const html = todos.map((todo) => (
    <div key={todo.id}>
      <h3 className={todo.isDone ? 'done' : ''}>{todo.name}</h3>
      <button onClick={() => handleToggle(todo.id)} className='toggle'>
        Toggle done
      </button>
      <button
        value={todo.id}
        className='delete'
        onClick={() => handleDelete(todo.id)}
      >
        Delete
      </button>
    </div>
  ));

  return <>{html}</>;
};
