// src/pages/Tasks/TaskNew.tsx
import TaskForm from '../Componets/Taskform';
import { useTasks } from '../hooks/useTasks';
import { useNavigate } from 'react-router-dom';

export default function TaskNew() {
  const { addTask } = useTasks();
  const navigate = useNavigate();

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold">Add new task</h1>
      <TaskForm
        onSubmit={(values) => {
          addTask(values);
          navigate('/tasks');
        }}
      />
    </div>
  );
}