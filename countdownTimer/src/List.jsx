import React from 'react';
import styled from 'styled-components';

import Item from './Item';

const Container = styled.div`
  display: grid;
  grid-gap: 1rem;
`;

export default function List({ events, onQuit }) {
  return (
    <Container>
      {events.map((event) => <Item event={event} />)}
    </Container>
  );
}
