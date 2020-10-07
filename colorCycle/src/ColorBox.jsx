import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  height: 60%;
  background-color: #${({ color }) => color};
  border-radius: 8px;
`;

export default function ColorBox({ color = '000000' }) {
  return (
    <Box color={color} />
  );
}
