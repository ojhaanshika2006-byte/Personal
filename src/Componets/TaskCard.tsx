// src/components/TaskCard/TaskCard.tsx
import type { Task } from '../types/task';

type Props = {
  task: Task;
  onComplete: (id: string) => void;
  onDelete: (id: string) => void;
};

export default function TaskCard({ task, onComplete, onDelete }: Props) {
  const isOverdue = task.status === 'Pending' && new Date(task.dueDate) < new Date();

  return (
    <div className="border rounded p-4 flex flex-col gap-2 bg-white dark:bg-gray-800">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">{task.title}</h3>
        <span
          className={`text-xs px-2 py-1 rounded ${
            task.priority === 'High' ? 'bg-red-100 text-red-700' :
            task.priority === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
            'bg-green-100 text-green-700'
          }`}
        >
          {task.priority}
        </span>
      </div>

      {task.description && <p className="text-sm opacity-80">{task.description}</p>}

      <div className="flex items-center gap-3 text-sm">
        <span className={`px-2 py-1 rounded ${task.status === 'Completed' ? 'bg-green-200' : 'bg-gray-200'}`}>
          {task.status}
        </span>
        <span className={`px-2 py-1 rounded ${isOverdue ? 'bg-red-200' : 'bg-gray-200'}`}>
          Due: {new Date(task.dueDate).toLocaleDateString()}
        </span>
      </div>

      <div className="flex gap-2 mt-2">
        {task.status === 'Pending' && (
          <button
            className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition"
            onClick={() => onComplete(task.id)}
          >
            Mark completed
          </button>
        )}
        <button
          className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}