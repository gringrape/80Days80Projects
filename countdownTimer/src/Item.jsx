import React from 'react';
import styled from 'styled-components';
import { MdQueryBuilder } from 'react-icons/md';

import { getDays, getHours, getMinutes, getSeconds } from './utils';
 
export default function Item({ event }) {
  const Container = styled.div`
    display: flex;
    align-items: center;
  `;

  const Button = styled.button`
    margin-left: 1rem;
    font-size: 1.2rem;
    padding: .4rem;
  `;

  const now = new Date();
  const eventTime = new Date(event.datetime);

  return (
    <Container>
      <MdQueryBuilder />
      &nbsp; {event.name} {getDays(eventTime, now)} Days {getHours(now, eventTime)}:{getMinutes(now, eventTime)}:{getSeconds(now, eventTime)} Left
      <Button>Complete</Button>
    </Container>
  );
}
