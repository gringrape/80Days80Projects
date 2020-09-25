/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

import Box from './Box';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: darkgray;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 7rem;
`;

export default function Page({ borderRadius, createChangeHanlder }) {
  return (
    <Container>
      <Title>
        Border Radius
      </Title>
      <Box borderRadius={borderRadius} createChangeHanlder={createChangeHanlder} />
    </Container>
  );
}
