import React, { useState } from 'react';

import './App.css';

import CalculatorPage from './CalculatorPage';

export default function App() {
  const [state, setState] = useState({
    currentNumber: 5000,
  });

  const { currentNumber } = state;

  return (
    <CalculatorPage currentNumber={currentNumber} />
  );
}
