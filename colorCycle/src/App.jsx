import React, { useState } from 'react';

import './App.css';

import MainPage from './MainPage';

export default function App() {
  const [increment, setIncrement] = useState(1);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState();
  const [colors, setColors] = useState({
    red: '00',
    green: '00',
    blue: '00',
  });

  const toDec = (hexString) => parseInt(hexString, 16);
  const toHex = (dec) => {
    const hex = Math.abs(dec).toString(16);
    return hex.length < 2 ? `0${hex}` : hex;
  };

  const updateColors = (prevColors) => {
    const updateColor = (hex) => {
      const dec = toDec(hex);
      return toHex(dec > 255 ? 0 : dec + increment);
    };

    return Object.entries(prevColors)
      .reduce((obj, [color, hex]) => ({ ...obj, [color]: updateColor(hex) }), {});
  };

  const handleChangeColor = (color) => (e) => {
    const { value } = e.target;
    const updateColor = () => {
      if (toDec(value) > 255) {
        return 'FF';
      }
      if (value.match(/[^0-9a-f]/i)) {
        alert('only hex is allowed');
        return '';
      }
      return value;
    };

    setColors((prev) => ({ ...prev, [color]: updateColor() }));
  };

  const handleChangeIncrement = (e) => {
    const { value } = e.target;
    const updated = parseInt(value, 10) || 0;

    setIncrement(updated);
  };

  const handleClickToggle = () => {
    console.log(isRunning);
    setIsRunning((prev) => !prev);
    if (isRunning) {
      clearInterval(intervalId);
      setIntervalId(null);
    } else {
      setIntervalId(
        setInterval(() => setColors(updateColors), 250),
      );
    }
  };

  return (
    <MainPage
      colors={colors}
      isRunning={isRunning}
      increment={increment}
      onClickToggle={handleClickToggle}
      onChangeColor={handleChangeColor}
      onChangeIncrement={handleChangeIncrement}
    />
  );
}
