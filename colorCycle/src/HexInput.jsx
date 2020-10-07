import React from 'react';

export default function HexInput({ color = 'black', hexValue = '00' }) {
  return (
    <div>
      <label htmlFor="color_hex">{ color }</label>
      <input name="color_hex" type="text" value={hexValue} />
    </div>
  );
}
