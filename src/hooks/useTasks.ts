// src/hooks/useTasks.ts
import { useMemo } from 'react';
import { useLocalStorage } from './useLocalStorage';
import type { Task } from '../types/task'; //, Status, Priority
import { v4 as uuid } from 'uuid';

const STORAGE_KEY = 'ppd_tasks';

export function useTasks() {
  const [tasks, setTasks] = useLocalStorage<Task[]>(STORAGE_KEY, []);

  const addTask = (payload: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newTask: Task = {
      ...payload,
      id: uuid(),
      createdAt: new Date().toISOString(),
    };
    setTasks((prev) => [newTask, ...prev]);
  };

  const updateTask = (id: string, updates: Partial<Task>) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, ...updates, updatedAt: new Date().toISOString() } : t
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const markCompleted = (id: string) => updateTask(id, { status: 'Completed' });
  
  const stats = useMemo(() => {
    const total = tasks.length;
    const completed = tasks.filter((t) => t.status === 'Completed').length;
    const pending = total - completed;
    const progress = total ? Math.round((completed / total) * 100) : 0;
    return { total, completed, pending, progress };
  }, [tasks]);

  return { tasks, addTask, updateTask, deleteTask, markCompleted, stats, setTasks };
}