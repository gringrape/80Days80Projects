import React from 'react';
import styled from 'styled-components';

import Light from './Light';

const colors = ['#0BA722', '#D59E07', '#B70009', '#0F3483', '#757575'];

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 8rem;
`;

export default function Lights() {
  return (
    <Container>
      {colors.map((color) => (
        <Light color={color} />
      ))}
    </Container>
  );
}
