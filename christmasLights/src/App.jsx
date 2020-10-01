import React, { useState } from 'react';

import Page from './Page';

import './App.css';

export default function App() {
  const [number, setNumber] = useState(0);
  const [timerId, setTimerId] = useState(null);
  const [cycle, setCycle] = useState(10);

  const updateNumber = (num) => {
    if (num > 99) {
      return 0;
    }
    return num + 1;
  };

  // handle Click
  const handleTimerToggle = () => {
    if (timerId) {
      clearInterval(timerId);
      setTimerId(null);
      setNumber(0);
      return;
    }
    setTimerId(setInterval(() => setNumber(updateNumber), cycle));
  };

  const handleCycleChange = (num) => {
    setCycle(num);
    clearInterval(timerId);
    setTimerId(setInterval(() => setNumber(updateNumber), cycle));
  };

  const theta = (num) => (2 * Math.PI) * (num / 100);

  const periodOne = () => (1 + Math.cos(theta(number))) / 2;
  const periodTwo = () => (1 - Math.cos(theta(number))) / 2;

  return (
    <Page
      periodFunctions={[periodOne, periodTwo]}
      onClick={handleTimerToggle}
      onChange={handleCycleChange}
      cycle={cycle}
    />
  );
}
