import React from 'react';
import styled from 'styled-components';

import CalculatorDisplay from './CalculatorDisplay';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function CalculatorPage() {
  return (
    <Container>
      <CalculatorDisplay />
    </Container>
  );
}
