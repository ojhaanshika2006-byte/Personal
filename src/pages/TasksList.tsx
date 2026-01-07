// src/pages/Tasks/TasksList.tsx
import { useMemo, useState } from 'react';
import TaskCard from '../Componets/TaskCard';
import { useTasks } from '../hooks/useTasks';
import type { Priority, Status } from '../types/task';
import { Link } from 'react-router-dom';

export default function TasksList() {
  const { tasks, markCompleted, deleteTask } = useTasks();
  const [status, setStatus] = useState<Status | 'All'>('All');
  const [priority, setPriority] = useState<Priority | 'All'>('All');
  const [sort, setSort] = useState<'dueDateAsc' | 'dueDateDesc'>('dueDateAsc');

  const filtered = useMemo(() => {
    let list = [...tasks];
    if (status !== 'All') list = list.filter((t) => t.status === status);
    if (priority !== 'All') list = list.filter((t) => t.priority === priority);
    list.sort((a, b) =>
      sort === 'dueDateAsc'
        ? new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
        : new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime()
    );
    return list;
  }, [tasks, status, priority, sort]);

  return (
    <div className="max-w-5xl mx-auto p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Tasks</h1>
        <Link to="/tasks/new" className="bg-blue-600 text-white px-3 py-2 rounded">Add task</Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium">Status</label>
          <select className="mt-1 w-full border rounded px-3 py-2" value={status} onChange={(e) => setStatus(e.target.value as any)}>
            <option>All</option>
            <option>Pending</option>
            <option>Completed</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Priority</label>
          <select className="mt-1 w-full border rounded px-3 py-2" value={priority} onChange={(e) => setPriority(e.target.value as any)}>
            <option>All</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Sort by</label>
          <select className="mt-1 w-full border rounded px-3 py-2" value={sort} onChange={(e) => setSort(e.target.value as any)}>
            <option value="dueDateAsc">Due date ↑</option>
            <option value="dueDateDesc">Due date ↓</option>
          </select>
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="text-sm opacity-70">No tasks match your filters.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {filtered.map((t) => (
            <TaskCard key={t.id} task={t} onComplete={markCompleted} onDelete={deleteTask} />
          ))}
        </div>
      )}
    </div>
  );
}