import { Todo } from '../models/Todo';

export interface ITodoAction {
  type: ActionType;
  payload: string;
}

export enum ActionType {
  ADDED,
  REMOVED,
  TOGGLED,
}

export const TodosReducer = (todos: Todo[], action: ITodoAction) => {
  switch (action.type) {
    case ActionType.ADDED: {
      return [...todos, new Todo(action.payload, Math.random(), false)];
    }
    case ActionType.REMOVED: {
      return todos.filter((todo) => todo.id !== +action.payload);
    }
    case ActionType.TOGGLED: {
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
