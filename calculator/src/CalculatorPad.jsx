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
  background-color: green;
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

const Button = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 100%;
  color: white;
  font-size: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function CalculatorPad({ onNumberClick, onOperatorClicked }) {
  return (
    <Container>
      <Number>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
          <Button onClick={() => onNumberClick(number)}>
            {number}
          </Button>
        ))}
        <Button>.</Button>
        <Button />
      </Number>
      <Additional>
        <Button>&#xB1;</Button>
        <Button>C</Button>
        <Button>AC</Button>
      </Additional>
      <Operator>
        {['+', '-', '*', '/', '='].map((operator) => (
          <Button onClick={() => onOperatorClicked(operator)}>
            {operator}
          </Button>
        ))}
      </Operator>
    </Container>
  );
}
