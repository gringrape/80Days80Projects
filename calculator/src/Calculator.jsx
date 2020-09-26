import React from 'react';

import CalculatorDisplay from './CalculatorDisplay';
import CalculatorPad from './CalculatorPad';

export default function Calculator({ currentNumber, onNumberClick }) {
  return (
    <div>
      <CalculatorDisplay currentNumber={currentNumber} />
      <CalculatorPad onNumberClick={onNumberClick} />
    </div>
  );
}
