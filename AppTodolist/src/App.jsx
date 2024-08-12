import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/navbar.jsx';
import Home from './components/home.jsx';
import About from './components/about.jsx';
import './App.css';

const App = () => {
  const [tasksByDate, setTasksByDate] = useState({});
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [darkMode, setDarkMode] = useState(true);

  const formatDate = (date) => {
    return date.toISOString().split('T')[0];
  };

  const addTask = (title, time) => {
    const dateString = formatDate(selectedDate);
    const newTask = { id: Date.now(), title, completed: false, time };

    setTasksByDate(prevTasks => ({
      ...prevTasks,
      [dateString]: [...(prevTasks[dateString] || []), newTask]
    }));
  };

  const toggleTask = (id) => {
    const dateString = formatDate(selectedDate);
    setTasksByDate(prevTasks => {
      const updatedTasks = prevTasks[dateString].map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      );
      return {
        ...prevTasks,
        [dateString]: updatedTasks
      };
    });
  };

  const deleteTask = (id) => {
    const dateString = formatDate(selectedDate);
    setTasksByDate(prevTasks => ({
      ...prevTasks,
      [dateString]: prevTasks[dateString].filter(task => task.id !== id)
    }));
  };

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <Router>
      <div className={darkMode ? 'dark-mode' : 'light-mode'}>
        <NavigationBar toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route 
            path="/" 
            element={
              <Home 
                tasksByDate={tasksByDate}
                addTask={addTask}
                toggleTask={toggleTask}
                deleteTask={deleteTask}
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
              />
            } 
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



