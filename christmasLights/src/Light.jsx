import React from 'react';
import styled from 'styled-components';

const Ball = styled.div`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

export default function Light({ color }) {
  return (
    <Ball color={color} />
  );
}
