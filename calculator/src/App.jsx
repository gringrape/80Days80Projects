import React, { useState } from 'react';

import './App.css';

import CalculatorPage from './CalculatorPage';

export default function App() {
  const [state, setState] = useState({
    currentNumber: 5000,
  });

  const { currentNumber } = state;

  const handleAddToCurrent = (number) => {
    if (currentNumber > 10 ** 7 - 1) {
      return;
    }
    setState({
      currentNumber: currentNumber * 10 + number,
    });
  };

  return (
    <CalculatorPage currentNumber={currentNumber} onNumberClick={handleAddToCurrent} />
  );
}
