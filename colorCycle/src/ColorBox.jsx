import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  height: 60%;
  border-radius: 8px;
`;

export default function ColorBox({ colors }) {
  const { red, green, blue } = colors;

  return (
    <Box style={{ backgroundColor: `#${red}${green}${blue}` }} />
  );
}
