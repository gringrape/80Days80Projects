import React from 'react';

import CalculatorDisplay from './CalculatorDisplay';
import CalculatorPad from './CalculatorPad';

export default function Calculator({
  currentNumber,
  accumulator,
  onNumberClick,
  onOperatorClicked,
}) {
  return (
    <div>
      <CalculatorDisplay currentNumber={currentNumber} accumulator={accumulator} />
      <CalculatorPad onNumberClick={onNumberClick} onOperatorClicked={onOperatorClicked} />
    </div>
  );
}
