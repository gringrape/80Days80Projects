import React, { useState, useEffect } from 'react';

import Page from './Page';

import './App.css';

export default function App() {
  const [number, setNumber] = useState(0);
  const [timerId, setTimerId] = useState(null);

  const updateNumber = (num) => {
    if (num > 99) {
      return 0;
    }
    return num + 1;
  };

  // handle Click
  const handleClick = () => {
    if (timerId) {
      clearInterval(timerId);
      setTimerId(null);
      setNumber(0);
      return;
    }
    setTimerId(setInterval(() => setNumber(updateNumber), 20));
  };

  const theta = (num) => (2 * Math.PI) * (num / 100);

  const periodOne = () => (1 + Math.cos(theta(number))) / 2;
  const periodTwo = () => (1 - Math.cos(theta(number))) / 2;

  return (
    <Page periodFunctions={[periodOne, periodTwo]} onClick={handleClick} />
  );
}
