import { Todo } from '../models/Todo';

type TodoAction =
  | { type: 'add_todo'; text: string }
  | { type: 'delete_todo'; todoId: number }
  | { type: 'toggle_todo'; todoId: number };

export const todoReducer = (state: Todo[], action: TodoAction) => {
  switch (action.type) {
    case 'add_todo':
      return [...state, new Todo(action.text, Math.random(), false)];
    case 'delete_todo':
      return state.filter((todo) => todo.id !== action.todoId);
    case 'toggle_todo':
      return state.map((todo) => {
        if (todo.id === action.todoId) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      });
    default:
      return state;
  }
};
