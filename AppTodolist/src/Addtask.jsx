import React, { useState } from 'react';

const AddTask = ({ addTask }) => {
  const [taskTitle, setTaskTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskTitle.trim()) {
      addTask(taskTitle);
      setTaskTitle('');
    }
  };

  return (
    <div className="container mt-5">
      <h1>Add Task</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input 
            type="text" 
            className="form-control" 
            value={taskTitle} 
            onChange={(e) => setTaskTitle(e.target.value)} 
            placeholder="Task title" 
          />
        </div>
        <button type="submit" className="btn btn-primary">Add</button>
      </form>
    </div>
  );
}

export default AddTask;