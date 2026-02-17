import { Trash2, Check } from 'lucide-react';
import { useTodoStore } from '../store/useTodoStore';
import type { Todo } from '../types';
import { cn } from '../lib/utils';

interface TodoItemProps {
  todo: Todo;
}

export function TodoItem({ todo }: TodoItemProps) {
  const { toggleTodo, deleteTodo } = useTodoStore();

  return (
    <div
      className={cn(
        "group flex items-center gap-4 p-4 bg-white border border-slate-100 rounded-xl",
        "transition-all duration-300 hover:shadow-md hover:border-indigo-100",
        "animate-slide-up"
      )}
    >
      <button
        onClick={() => toggleTodo(todo.id)}
        className={cn(
          "flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200",
          todo.completed
            ? "bg-indigo-500 border-indigo-500"
            : "border-slate-300 hover:border-indigo-500"
        )}
      >
        <Check
          className={cn(
            "w-3.5 h-3.5 text-white transition-transform duration-200",
            todo.completed ? "scale-100" : "scale-0"
          )}
        />
      </button>

      <span
        className={cn(
          "flex-grow text-lg transition-all duration-200 break-all",
          todo.completed ? "text-slate-400 line-through" : "text-slate-700"
        )}
      >
        {todo.text}
      </span>

      <button
        onClick={() => deleteTodo(todo.id)}
        className={cn(
          "flex-shrink-0 opacity-0 group-hover:opacity-100",
          "p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg",
          "transition-all duration-200"
        )}
      >
        <Trash2 className="w-5 h-5" />
      </button>
    </div>
  );
}
