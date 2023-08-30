import { useEffect } from 'react';
import { Todo } from '../models/Todo';

export const useGetTodos = (
  todos: Todo[],
  setStoredTodos: (todos: Todo[]) => void
) => {
  useEffect(() => {
    if (todos) {
      setStoredTodos(todos);
    }
  });
};
