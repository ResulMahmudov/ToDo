import React from 'react';
import logo from '../image/favicon.png';
interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center py-12 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-100 via-slate-50 to-slate-50">
      <div className="w-full max-w-2xl">
        <div className="mb-8 text-center animate-fade-in">
          <div className="inline-flex items-center justify-center">
          <img src={logo} className="w-[90px]" alt="AuraDo" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 tracking-tight mb-2">
            AuraDo
          </h1>
          <p className="text-slate-500 text-lg">
            Stay organized and focused
          </p>
        </div>

        <div className="bg-white/50 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 p-6 sm:p-8 animate-slide-up">
          {children}
        </div>

        <div className="mt-8 text-center text-slate-400 text-sm">
          <p>Press Enter to add a task</p>
        </div>
      </div>
    </div>
  );
}
