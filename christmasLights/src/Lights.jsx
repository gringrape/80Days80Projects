import React from 'react';

import Light from './Light';

export default function Lights() {
  return (
    <div>
      {[0, 1, 2].map(() => (
        <Light />
      ))}
    </div>
  );
}
