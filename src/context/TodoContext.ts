import { createContext } from 'react';
import { Todo } from '../models/Todo';

export interface IContext {
  todos: Todo[];
  add: (text: string) => void;
  remove: (id: number) => void;
  toggle: (id: number) => void;
}

export const TodoContext = createContext<IContext>({
  todos: [],
  add: (text: string) => {
    console.log(text);
  },
  remove: (id: number) => {
    console.log(id);
  },
  toggle: (id: number) => {
    console.log(id);
  },
});
