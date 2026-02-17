import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { v4 as uuidv4 } from 'uuid';
import type { TodoState } from '../types';


export const useTodoStore = create<TodoState>()(
  persist(
    (set) => ({
      todos: [],
      filter: 'all',
      addTodo: (text: string) =>
        set((state) => ({
          todos: [
            {
              id: uuidv4(),
              text,
              completed: false, 
              createdAt: new Date().toLocaleString('az-AZ'),
            },
            ...state.todos,
          ],
        })),
      toggleTodo: (id: string) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          ),
        })),
      deleteTodo: (id: string) =>
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        })),
        
      setFilter: (filter) => set({ filter }),
      cleanupCompleted: () =>
        set((state) => ({
          todos: state.todos.filter((todo) => !todo.completed),
        })),
    }),

    {
      name: 'todo-storage',
    }
  )
);
