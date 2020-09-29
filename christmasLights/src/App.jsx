import styled from 'styled-components';
import React, { useState, useEffect } from 'react';

import Page from './Page';

import './App.css';

export default function App() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const updateNum = (num) => (num > 99 ? 0 : num + 1);
    const intervalId = setInterval(() => setNumber(updateNum), 10);
    return () => clearInterval(intervalId);
  }, []);

  const theta = (num) => (2 * Math.PI) * (num / 100);

  const periodOne = (radian) => (1 + Math.cos(radian)) / 2;
  const periodTwo = (radian) => (1 - Math.cos(radian)) / 2;

  return (
    <Page />
  );
}
