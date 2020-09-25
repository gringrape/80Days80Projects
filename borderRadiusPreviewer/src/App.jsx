import React, { useState } from 'react';

import Page from './Page';

import './App.css';

export default function App() {
  const [borderRadius, setBorderRadius] = useState({
    topLeft: '0',
    topRight: '0',
    bottomLeft: '0',
    bottomRight: '0',
  });

  const createChangeHanlder = (position) => {
    const updaters = {
      TOP_LEFT: (source) => setBorderRadius({ ...borderRadius, topLeft: source }),
      TOP_RIGHT: (source) => setBorderRadius({ ...borderRadius, topRight: source }),
      BOTTOM_LEFT: (source) => setBorderRadius({ ...borderRadius, bottomLeft: source }),
      BOTTOM_RIGHT: (source) => setBorderRadius({ ...borderRadius, bottomRight: source }),
    };

    return updaters[position];
  };

  return (
    <Page borderRadius={borderRadius} createChangeHanlder={createChangeHanlder} />
  );
}
