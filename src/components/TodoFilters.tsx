import { useTodoStore } from '../store/useTodoStore';
import { cn } from '../lib/utils';
import type { TodoFilter } from '../types';

export function TodoFilters() {
  const { filter, setFilter, todos, cleanupCompleted } = useTodoStore();

  const activeCount = todos.filter((t) => !t.completed).length;
  const completedCount = todos.filter((t) => t.completed).length;

  const filters: { value: TodoFilter; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'active', label: 'Active' },
    { value: 'completed', label: 'Completed' },
  ];

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 text-sm text-slate-500">
      <span className="order-2 sm:order-1">
        {activeCount} {activeCount === 1 ? 'task' : 'tasks'} remaining
      </span>

      <div className="flex p-1 bg-slate-100 rounded-xl order-1 sm:order-2 w-full sm:w-auto">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setFilter(f.value)}
            className={cn(
              "flex-1 sm:flex-none px-4 py-2 rounded-lg font-medium transition-all duration-200",
              filter === f.value
                ? "bg-white text-indigo-600 shadow-sm"
                : "text-slate-500 hover:text-slate-700 hover:bg-slate-200/50"
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <button
        onClick={cleanupCompleted}
        disabled={completedCount === 0}
        className={cn(
          "order-3 text-slate-400 hover:text-red-500 transition-colors",
          completedCount === 0 && "invisible"
        )}
      >
        Clear Completed
      </button>
    </div>
  );
}
