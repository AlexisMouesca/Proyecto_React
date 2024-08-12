import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Home.css'; 

const Home = ({ tasksByDate, addTask, toggleTask, deleteTask, selectedDate, setSelectedDate }) => {
  const [taskTitle, setTaskTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskTitle.trim()) {
      addTask(taskTitle);
      setTaskTitle('');
    }
  };

  const formatDate = (date) => {
    return date.toISOString().split('T')[0]; // Formato YYYY-MM-DD
  };

  return (
    <div className="container mt-5">
      <h1>To-Do List</h1>

      {/* Calendario */}
      <div className="mb-4">
        <Calendar
          onChange={setSelectedDate}
          value={selectedDate}
        />
      </div>

      {/* Agregar Tarea*/ }
      <div className="mb-4">
        <h2>Add Task</h2>
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

      {/* Lista de Tareas */}
      <div>
        <h2>Tasks Overview</h2>
        <div className="task-table">
          <div className="task-table-header">
            <div className="task-table-column">Date</div>
            <div className="task-table-column">Title</div>
            <div className="task-table-column">Status</div>
            <div className="task-table-column">Actions</div>
          </div>
          {Object.entries(tasksByDate).map(([date, tasks]) => (
            tasks.map(task => (
              <div key={task.id} className="task-table-row">
                <div className="task-table-column">{date}</div>
                <div className="task-table-column">{task.title}</div>
                <div className="task-table-column">
                  <button 
                    className={`btn ${task.completed ? 'btn-success' : 'btn-warning'}`}
                    onClick={() => toggleTask(task.id)}
                  >
                    {task.completed ? 'Completed' : 'Pending'}
                  </button>
                </div>
                <div className="task-table-column">
                  <button 
                    className="btn btn-danger"
                    onClick={() => deleteTask(task.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
