import React, { useState } from 'react';

import './App.css';

import CalculatorPage from './CalculatorPage';

function makeCalculators(operator) {
  const calculators = {
    '+': (x, y) => x + y,
    '-': (x, y) => x - y,
    '*': (x, y) => x * y,
    '/': (x, y) => x / y,
    '=': (x, y) => y,
  };

  return calculators[operator];
}

export default function App() {
  const [state, setState] = useState({
    currentNumber: 0,
    storedOperator: '=',
  });

  const { currentNumber, accumulator, storedOperator } = state;

  const handleAddToCurrent = (number) => {
    if (currentNumber > 10 ** 7 - 1) {
      return;
    }
    setState({
      ...state,
      currentNumber: currentNumber * 10 + number,
    });
  };

  const handleOperatorClicked = (operator) => {
    const calculate = makeCalculators(storedOperator);

    setState({
      currentNumber: null,
      accumulator: calculate(accumulator, currentNumber),
      storedOperator: operator,
    });
  };

  return (
    <CalculatorPage
      currentNumber={currentNumber}
      accumulator={accumulator}
      onNumberClick={handleAddToCurrent}
      onOperatorClicked={handleOperatorClicked}
    />
  );
}
