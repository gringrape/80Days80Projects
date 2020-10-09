import React from 'react';
import styled from 'styled-components';
import { MdQueryBuilder } from 'react-icons/md';
 
export default function Item() {
  const Container = styled.div`
    display: flex;
    align-items: center;
  `;

  const Button = styled.button`
    margin-left: 1rem;
    font-size: 1.2rem;
    padding: .4rem;
  `;

  return (
    <Container>
      <MdQueryBuilder />
      &nbsp; X Days 00:00:00 Left
      <Button>Complete</Button>
    </Container>
  );
}
