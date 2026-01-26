import { useParams, useNavigate } from "react-router-dom";
import TaskForm from "../components/Taskform";
import { useTasks } from "../hooks/useTasks";

export default function EditTask() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tasks, updateTask } = useTasks();

  const task = tasks.find(t => t.id === id);

  if (!task) return <p className="flex justify-center text-4xl m-10 bold">Task not found</p>;

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 m-5">Edit Task</h2>

      <TaskForm
        initial={task}
        onSubmit={(values) => {
          updateTask(task.id, values);
          navigate("/tasks");
        }}
      />
    </div>  
  );
}
