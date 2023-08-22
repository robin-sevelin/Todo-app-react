export type TodoAction =
  | { type: 'add_todo'; text: string }
  | { type: 'delete_todo'; todoId: number }
  | { type: 'toggle_todo'; todoId: number };
