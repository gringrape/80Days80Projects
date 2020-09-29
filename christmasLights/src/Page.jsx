import React from 'react';
import styled from 'styled-components';

import Lights from './Lights';
import Button from './Button';

const Container = styled.div`
  background-image: url('./image/bg3.jpg');
  background-size: contain;
  width: 100%;
  height: 100vh;
  padding-top: 5rem;
`;

const Title = styled.h1`
  color: white;
  letter-spacing: 4px;
  margin: 0 auto;
  width: fit-content;
  font-family: 'Sansita Swashed', cursive;
  font-size: 2rem;
  margin-bottom: 5rem;
`;

const ButtonBox = styled.div`
  width: fit-content;
  margin: 0 auto;
  margin-top: 3.5rem;
`;

export default function Page() {
  return (
    <Container>
      <Title>
        Merry Christmas :&#41;
      </Title>
      <Lights />
      <ButtonBox>
        <Button />
      </ButtonBox>
    </Container>
  );
}
