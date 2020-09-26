import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 100%;
  color: white;
  font-size: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function CalculatorButton({ content, onClick }) {
  return (
    <Box onClick={(e) => onClick(e.target.value)}>
      {content}
    </Box>
  );
}