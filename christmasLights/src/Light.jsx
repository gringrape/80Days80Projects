import React from 'react';
import styled from 'styled-components';

const Ball = styled.div`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  filter: brightness(${(props) => props.brightness}%)
          blur(3px)
          contrast(150%);
`;

export default function Light({ color, periodFunction }) {
  const brightness = 100 + 200 * periodFunction();

  return (
    <Ball color={color} brightness={brightness} />
  );
}
