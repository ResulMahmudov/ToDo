import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { useTodoStore } from '../store/useTodoStore';
import { cn } from '../lib/utils';

export function TodoInput() {
  const [text, setText] = useState('');
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text.trim());
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative group">
      <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
        <Plus className="h-6 w-6 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
      </div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
        className={cn(
          "w-full pl-12 pr-4 py-4 bg-white border-2 border-slate-100 rounded-2xl",
          "text-lg text-slate-700 placeholder:text-slate-400",
          "focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10",
          "transition-all duration-300 shadow-sm hover:shadow-md"
        )}
      />
      <button
        type="submit"
        disabled={!text.trim()}
        className={cn(
          "absolute right-2 top-2 bottom-2 aspect-square rounded-xl",
          "flex items-center justify-center transition-all duration-200",
          text.trim()
            ? "bg-indigo-500 text-white hover:bg-indigo-600 shadow-lg hover:shadow-indigo-500/25 active:scale-95"
            : "bg-slate-100 text-slate-300 cursor-not-allowed"
        )}
      >
        <Plus className="h-6 w-6" />
      </button>
    </form>
  );
}
