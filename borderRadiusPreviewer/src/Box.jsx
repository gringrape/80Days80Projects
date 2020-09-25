/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

import BorderNumberBox from './BorderNumberBox';

const BorderBox = styled.div`
  position: relative;
  height: 20rem;
  width: 40rem;
  background-color: white;

  display: flex;
  justify-content: center;
  align-items: center;

  border-top-left-radius: ${(props) => props.topLeft}px;
  border-top-right-radius: ${(props) => props.topRight}px;
  border-bottom-left-radius: ${(props) => props.bottomLeft}px;
  border-bottom-right-radius: ${(props) => props.bottomRight}px;
`;

const positionBetween = '-4rem';

export default function Box({
  borderRadius: {
    topLeft,
    topRight,
    bottomLeft,
    bottomRight,
  },
  createChangeHanlder,
}) {
  return (
    <BorderBox
      topLeft={topLeft}
      topRight={topRight}
      bottomLeft={bottomLeft}
      bottomRight={bottomRight}
    >
      <BorderNumberBox
        positionTop={positionBetween}
        positionLeft={positionBetween}
        borderRadius={topLeft}
        onInputChange={createChangeHanlder('TOP_LEFT')}
      />
      <BorderNumberBox
        positionTop={positionBetween}
        positionRight={positionBetween}
        borderRadius={topRight}
        onInputChange={createChangeHanlder('TOP_RIGHT')}
      />
      <BorderNumberBox
        positionBottom={positionBetween}
        positionLeft={positionBetween}
        borderRadius={bottomLeft}
        onInputChange={createChangeHanlder('BOTTOM_LEFT')}
      />
      <BorderNumberBox
        positionBottom={positionBetween}
        positionRight={positionBetween}
        borderRadius={bottomRight}
        onInputChange={createChangeHanlder('BOTTOM_RIGHT')}
      />
      <div>
        <p>
          border-top-left-radius:
          {topLeft}
          px;
        </p>
        <p>
          border-top-right-radius:
          {topRight}
          px;
        </p>
        <p>
          border-bottom-left-radius:
          {bottomLeft}
          px;
        </p>
        <p>
          border-bottom-right-radius:
          {bottomRight}
          px;
        </p>
      </div>
    </BorderBox>
  );
}
