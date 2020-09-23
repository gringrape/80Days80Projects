import React, { useState } from 'react';

import Converter from './Converter';

export default function App() {
  const [state, setState] = useState({
    inputNumber: '',
    convertedNumber: '',
  });

  const { inputNumber, convertedNumber } = state;

  const handleInputChange = (e) => {
    e.preventDefault();

    setState({
      ...state,
      inputNumber: e.target.value,
    });
  };

  const handleClickConvert = () => {
    setState({
      inputNumber: '',
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
