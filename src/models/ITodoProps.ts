import { Todo } from './Todo';

export interface ITodoProps {
  todos: Todo[];
  onDelete: (TodoId: number) => void;
  onToggle: (TodoId: number) => void;
}
