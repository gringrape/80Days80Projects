import React from 'react';

import CalculatorDisplay from './CalculatorDisplay';
import CalculatorPad from './CalculatorPad';

export default function Calculator({ currentNumber }) {
  return (
    <div>
      <CalculatorDisplay currentNumber={currentNumber} />
      <CalculatorPad />
    </div>
  );
}
