/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

import Calculator from './Calculator';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function CalculatorPage({
  currentNumber,
  accumulator,
  onNumberClick,
  onOperatorClicked,
  onReset,
  onCancel,
}) {
  return (
    <Container>
      <Calculator
        currentNumber={currentNumber}
        accumulator={accumulator}
        onNumberClick={onNumberClick}
        onOperatorClicked={onOperatorClicked}
        onReset={onReset}
        onCancel={onCancel}
      />
    </Container>
  );
}
