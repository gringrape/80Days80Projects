import React, { useState } from 'react';

import Converter from './Converter';

export default function App() {
  const [state, setState] = useState({
    inputNumber: '',
    convertedNumber: '',
  });

  const { inputNumber, convertedNumber } = state;

  const INPUT_LIMIT = 8;

  const handleInputChange = (e) => {
    e.preventDefault();

    const userInput = e.target.value;
    const lastDigit = userInput[userInput.length - 1];

    if (userInput.length > INPUT_LIMIT) {
      return;
    }

    if (lastDigit !== '0' && lastDigit !== '1') {
      alert('only 0 or 1 should be entered');
      return;
    }

    setState({
      ...state,
      inputNumber: userInput,
    });
  };

  const handleClickConvert = () => {
    setState({
      ...state,
      convertedNumber: Number.parseInt(inputNumber, 2).toString(),
    });
  };

  return (
    <Converter
      inputNumber={inputNumber}
      convertedNumber={convertedNumber}
      onClick={handleClickConvert}
      onChange={handleInputChange}
    />
  );
}
