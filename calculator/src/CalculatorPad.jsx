import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  width: 40rem;
  height: 50rem;
  grid-template-areas: "additional operator"
                       "number operator";
  grid-template-rows: 1fr 4fr;
  grid-template-columns: 3fr 1fr;
`;

const Operator = styled.div`
  grid-area: operator;
  background-color: yellow;
  display: grid;
  grid-template-rows: repeat(5, 10rem);
`;

const Number = styled.div`
  grid-area: number;
  background-color: blue;
  display: grid;
  grid-template-rows: repeat(4, 10rem);
  grid-template-columns: repeat(3, 10rem);
`;

const Additional = styled.div`
  grid-area: additional;
  background-color: red;
  display: grid;
  grid-template-columns: repeat(3, 10rem);
`;

const Cell = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 100%;
  color: white;
  font-size: 5rem;
  text-align: center;
`;

export default function CalculatorPad() {
  return (
    <Container>
      <Number>
        <Cell>1</Cell>
        <Cell>1</Cell>
        <Cell>1</Cell>
        <Cell>1</Cell>
        <Cell>1</Cell>
        <Cell>1</Cell>
        <Cell>1</Cell>
        <Cell>1</Cell>
        <Cell>1</Cell>
        <Cell>1</Cell>
        <Cell>1</Cell>
        <Cell>1</Cell>
      </Number>
      <Additional>
        <Cell />
        <Cell />
        <Cell />
      </Additional>
      <Operator>
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
      </Operator>
    </Container>
  );
}
