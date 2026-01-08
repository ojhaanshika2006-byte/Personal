// src/types/task.ts
export type Priority = 'Low' | 'Medium' | 'High';
export type Status = 'Pending' | 'Completed';

export interface Task {
  id: string;
  title: string;
  description?: string;
  priority: Priority;
  status: Status;
  dueDate: string; // ISO date string for simplicity
  createdAt: string;
  updatedAt?: string;
}
