import { useTodoStore } from '../store/useTodoStore';
import { TodoItem } from './TodoItem';
import { ClipboardList } from 'lucide-react';

export function TodoList() {
  const { todos, filter } = useTodoStore();

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  if (todos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in">
        <div className="bg-slate-50 p-4 rounded-2xl mb-4">
          <ClipboardList className="w-8 h-8 text-slate-400" />
        </div>
        <h3 className="text-xl font-medium text-slate-700 mb-1">
          No tasks yet
        </h3>
        <p className="text-slate-400">
          Add your first task above to get started
        </p>
      </div>
    );
  }

  if (filteredTodos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in">
        <p className="text-slate-400">
          No {filter} tasks found
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
