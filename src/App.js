import React, { useState } from 'react';
import './App.css';

const calendarDates = Array(31)
  .fill(0)
  .map((e, i) => i);

const App = () => {
  const [choosingType, setChosingType] = useState('start'); // 'start' or 'end'
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const updateDate = (chosenDay) => {
    if (startDate && chosenDay < startDate) {
      setStartDate(chosenDay);
      return setChosingType('end');
    }

    if (endDate && chosenDay > endDate) {
      setEndDate(chosenDay);
      return setChosingType('end');
    }
    if (choosingType === 'start') {
      setStartDate(chosenDay);
      return setChosingType('end');
    }

    if (choosingType === 'end') {
      setEndDate(chosenDay);
    }
  };
  return (
    <div className='app'>
      <div className='date-chooser'>
        <button
          onClick={() => setChosingType('start')}
          className='date-chooser-button'
        >
          Start Date <span>{startDate}</span>
        </button>
        <button
          onClick={() => setChosingType('end')}
          className='date-chooser-button'
        >
          End Date <span>{endDate}</span>
        </button>
      </div>

      <div className='calendar'>
        {calendarDates.map((day, index) => {
          const dayNumber = day + 1;
          return (
            <button
              key={index}
              onClick={() => updateDate(dayNumber)}
              className='calendar-day'
            >
              {dayNumber}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default App;
