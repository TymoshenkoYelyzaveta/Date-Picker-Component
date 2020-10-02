import React, { useState } from 'react';
import styled, { css } from 'styled-components';
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
      <StyledDateChooser>
        <StyledDateChooserButton onClick={() => setChosingType('start')}>
          Start Date <span>{startDate}</span>
        </StyledDateChooserButton>
        <StyledDateChooserButton onClick={() => setChosingType('end')}>
          End Date <span>{endDate}</span>
        </StyledDateChooserButton>
      </StyledDateChooser>

      <StyledCalender>
        {calendarDates.map((day, index) => {
          const dayNumber = day + 1;

          let isSelected = dayNumber === startDate || dayNumber === endDate;
          return (
            <StyledCalenderDay
              isSelected={isSelected}
              key={index}
              onClick={() => updateDate(dayNumber)}
            >
              {dayNumber}
            </StyledCalenderDay>
          );
        })}
      </StyledCalender>
    </div>
  );
};

export default App;

const StyledDateChooser = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const StyledDateChooserButton = styled.button`
  flex: 1;
  padding: 15px;
  cursor: pointer;
  border: 0;
  outline: 0;
  background: transparent;
  text-transform: uppercase;
  color: #e7d9a7;
  border-bottom: 2px solid rgba(231, 217, 167, 0.2);

  span {
    display: block;
    min-height: 60px;
    font-size: 50px;
  }
`;

const StyledCalender = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  padding: 20px;
  max-width: 400px;
  border-radius: 10px;
  background: #497c51;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
`;
const StyledCalenderDay = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  transition: 0.3s ease background;
  border: 0;
  outline: 0;
  cursor: pointer;
  background: none;
  color: #e7d9a7;

  ${(props) =>
    props.isSelected &&
    css`
      background: #a2b264;
      color: #253734;
    `}}
`;
