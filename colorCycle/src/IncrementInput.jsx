import React from 'react';

export default function IncrementInput({
  increment,
  onChange,
  isRunning,
}) {
  return (
    <div>
      <label htmlFor="increment">
        Increment
      </label>
      <input
        type="text"
        id="increment"
        value={increment}
        onChange={onChange}
        disabled={isRunning}
      />
    </div>
  );
}
