import { useContext } from 'react';
import { Todo } from '../models/Todo';
import { TodoContext } from '../context/TodoContext';
import { GreenButton, RedButton } from '../styled/Buttons';
import { ActionType } from '../reducers/TodosReducer';

interface ITodoProps {
  todo: Todo;
}

export const AppTodo = ({ todo }: ITodoProps) => {
  const { dispatch } = useContext(TodoContext);

  return (
    <div className={todo.isDone ? 'done' : ''}>
      {todo.name}
      <GreenButton
        onClick={() =>
          dispatch({ type: ActionType.TOGGLED, payload: todo.id.toString() })
        }
      >
        Toggle done
      </GreenButton>
      <RedButton
        onClick={() =>
          dispatch({ type: ActionType.REMOVED, payload: todo.id.toString() })
        }
      >
        Delete
      </RedButton>
    </div>
  );
};
