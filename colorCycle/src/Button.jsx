import React from 'react';

export default function Button({ isRunning, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      {isRunning ? 'Stop' : 'Start'}
    </button>
  );
}
