import React from 'react';

import CalculatorDisplay from './CalculatorDisplay';
import CalculatorPad from './CalculatorPad';

export default function Calculator({
  currentNumber,
  accumulator,
  onNumberClick,
  onOperatorClicked,
  onReset,
  onCancel,
}) {
  return (
    <div>
      <CalculatorDisplay currentNumber={currentNumber} accumulator={accumulator} />
      <CalculatorPad
        onNumberClick={onNumberClick}
        onOperatorClicked={onOperatorClicked}
        onReset={onReset}
        onCancel={onCancel}
      />
    </div>
  );
}
