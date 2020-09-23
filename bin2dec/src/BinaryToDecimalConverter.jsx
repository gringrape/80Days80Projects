import React from 'react';
import styled from 'styled-components';

import DecimalResult from './DecimalResult';
import BinaryForm from './BinaryForm';

const Container = styled.div`
  background-color: lightblue;
  padding: 2rem 2rem 2rem 2rem;
  max-width: 40rem;
  border-radius: 3px;
  border: 1px black solid;
`;

export default function BinaryToDecimalConverter() {
  return (
    <div>
      <h1>Binary to Decimal Converter</h1>
      <Container>
        <BinaryForm />
        <DecimalResult />
      </Container>
    </div>
  );
}
