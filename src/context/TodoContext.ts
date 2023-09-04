import { Dispatch, createContext } from 'react';
import { Todo } from '../models/Todo';
import { ITodoAction } from '../reducers/TodosReducer';

export interface ITodoContext {
  todos: Todo[];
  dispatch: Dispatch<ITodoAction>;
}

export const TodoContext = createContext<ITodoContext>({
  todos: [],
  dispatch: () => {
    return;
  },
});
