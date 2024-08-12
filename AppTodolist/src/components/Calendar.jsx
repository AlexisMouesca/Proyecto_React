import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const MyCalendar = ({ setSelectedDate }) => {
  const onChange = (newDate) => {
    setSelectedDate(newDate);
  };

  return (
    <div className="container mt-5">
      <h1>Calendar</h1>
      <Calendar
        onChange={onChange}
        value={new Date()}
      />
    </div>
  );
}

export default MyCalendar;

