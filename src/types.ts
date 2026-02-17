export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: string;
}

export type TodoFilter = 'all' | 'active' | 'completed';

export interface TodoState {
  todos: Todo[];
  filter: TodoFilter;
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  setFilter: (filter: TodoFilter) => void;
  cleanupCompleted: () => void;
}
