import React from 'react';
import styled from 'styled-components';

import Item from './Item';

const Container = styled.div`
  display: grid;
  grid-gap: 1rem;
`;

export default function List() {
  return (
    <Container>
      <Item />
      <Item />
    </Container>
  );
}
