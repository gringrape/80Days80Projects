import React from 'react';
import styled from 'styled-components';

import HexInput from './HexInput';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 1rem;
`;

export default function HexBox({ colors, isRunning, onChange }) {
  const { red, green, blue } = colors;
  return (
    <Container>
      <HexInput
        color="Red"
        hexValue={red}
        onChange={onChange('red')}
        isRunning={isRunning}
      />
      <HexInput
        color="Green"
        hexValue={green}
        onChange={onChange('green')}
        isRunning={isRunning}
      />
      <HexInput
        color="Blue"
        hexValue={blue}
        onChange={onChange('blue')}
        isRunning={isRunning}
      />
    </Container>
  );
}
