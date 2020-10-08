import React from 'react';
import styled from 'styled-components';

import ColorBox from './ColorBox';
import HexBox from './HexBox';
import Button from './Button';
import IncrementInput from './IncrementInput';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 4rem;
  letter-spacing: 3px;
`;

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  justify-content: space-between;
  height: 40vh;
`;

export default function MainPage({
  colors,
  increment,
  isRunning,
  onChangeColor,
  onChangeIncrement,
  onClickToggle,
}) {
  return (
    <Container>
      <Title>Color Cycle</Title>
      <BoxContainer>
        <ColorBox colors={colors} />
        <HexBox
          colors={colors}
          isRunning={isRunning}
          onChange={onChangeColor}
        />
      </BoxContainer>
      <div>
        <IncrementInput
          increment={increment}
          onChange={onChangeIncrement}
          isRunning={isRunning}
        />
        <Button onClick={onClickToggle} isRunning={isRunning} />
      </div>
    </Container>
  );
}
