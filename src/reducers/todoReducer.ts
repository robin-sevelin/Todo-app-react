import { Todo } from '../models/Todo';

interface ITodoAction {
  type: string;
  payload: string;
}

export const TodoReducer = (todos: Todo[], action: ITodoAction) => {
  switch (action.type) {
    case 'ADDED': {
      return [...todos, new Todo(action.payload, Math.random(), false)];
    }
    case 'REMOVED': {
      return todos.filter((todo) => todo.id !== +action.payload);
    }
    case 'TOGGLED': {
      return todos.map((todo) => {
        if (todo.id === +action.payload) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      });
    }
    default:
      break;
  }
  return todos;
};
