// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import TasksList from './pages/TasksList';
import TaskNew from './pages/TaskNew';
import Navbar from './components/Navbar';
import './index.css'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 transition-colors duration-300">
    <BrowserRouter>
      <Navbar/>
            <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/tasks" element={<TasksList />} />
        <Route path="/tasks/new" element={<TaskNew />} />
      </Routes>
    </BrowserRouter>
     </div>
  );
}

