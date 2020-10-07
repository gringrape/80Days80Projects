import React from 'react';
import styled from 'styled-components';

import HexInput from './HexInput';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 1rem;
`;

export default function HexBox() {
  return (
    <Container>
      <HexInput color="Red" />
      <HexInput color="Green" />
      <HexInput color="Blue" />
    </Container>
  );
}
