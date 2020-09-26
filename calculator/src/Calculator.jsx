import React from 'react';

import CalculatorDisplay from './CalculatorDisplay';
import CalculatorPad from './CalculatorPad';

export default function Calculator() {
  return (
    <div>
      <CalculatorDisplay />
      <CalculatorPad />
    </div>
  );
}
