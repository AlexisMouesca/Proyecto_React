import React from 'react';

const TaskItem = ({ task, toggleTask, deleteTask }) => {
  return (
    <li className={task.completed ? 'completed' : ''}>
      <span>{task.title} {task.time && `at ${task.time}`}</span>
      <button onClick={() => toggleTask(task.id)} className="btn btn-success btn-sm">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={() => deleteTask(task.id)} className="btn btn-danger btn-sm">
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
}

export default TaskItem;
