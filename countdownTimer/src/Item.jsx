import React, { useReducer, useEffect } from 'react';
import styled from 'styled-components';
import { MdQueryBuilder } from 'react-icons/md';

import { getDays, getHours, getMinutes, getSeconds } from './utils';
 
const Container = styled.div`
display: flex;
align-items: center;
`;

const Button = styled.button`
margin-left: 1rem;
font-size: 1.2rem;
padding: .4rem;
`;

export default function Item({ event }) {
  const now = new Date();
  const eventTime = new Date(event.datetime);

  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    const id = setInterval(
      () => forceUpdate(),
      500,
    );
    return () => {
      clearInterval(id);
    }
  }, [event])

  return (
    <Container>
      <MdQueryBuilder />
      &nbsp; {event.name} {getDays(eventTime, now)} Days {getHours(now, eventTime)}:{getMinutes(now, eventTime)}:{getSeconds(now, eventTime)} Left
      <Button>Complete</Button>
    </Container>
  );
}
