/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const NumberBox = styled.input`
  position: absolute;
  background-color: black;
  width: 2rem;
  height: 2rem;
  color: white;

  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
`;

export default function BorderNumberBox({
  positionTop = null,
  positionLeft = null,
  positionBottom = null,
  positionRight = null,
  onInputChange,
  borderRadius,
}) {
  return (
    <NumberBox
      top={positionTop}
      left={positionLeft}
      right={positionRight}
      bottom={positionBottom}
      onChange={(e) => onInputChange(e.target.value)}
      value={borderRadius}
    />
  );
}
