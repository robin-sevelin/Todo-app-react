import { ITodoProps } from '../models/ITodoProps';

export const AppTodo = (props: ITodoProps) => {
  const { todos } = props;

  const html = todos.map((todo) => (
    <div key={todo.id}>
      <h3>{todo.name}</h3>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  ));

  return <>{html}</>;
};
