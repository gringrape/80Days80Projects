import React from 'react';
import styled from 'styled-components';

const DisplayBox = styled.div`
  width: 40rem;
  height: 10rem;
  background-color: black;
  position: relative;
`;

const Number = styled.div`
  position: absolute;
  bottom: 0;
  color: white;
  right: 2rem;
  font-size: 8rem;
`;

const isOutOfBoundary = (number) => number > 10 ** 8 - 1;

export default function CalculatorDisplay({ currentNumber, accumulator }) {
  if (isOutOfBoundary(accumulator)) {
    return (
      <DisplayBox>
        <Number>
          Error
        </Number>
      </DisplayBox>
    );
  }

  return (
    <DisplayBox>
      <Number>
        { currentNumber ?? accumulator }
      </Number>
    </DisplayBox>
  );
}
