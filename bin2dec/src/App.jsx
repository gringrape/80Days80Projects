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

    if (e.target.value.length > INPUT_LIMIT) {
      return;
    }

    setState({
      ...state,
      inputNumber: e.target.value,
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
