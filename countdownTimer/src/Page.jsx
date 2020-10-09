import React from 'react';
import styled from 'styled-components';

import Form from './Form';
import List from './List';

const Title = styled.h1`
  font-size: 3rem;
`;

const Container = styled.div`
  font-size: 2rem;
`;

const FormBox = styled.div`
  margin: 5rem 0 5rem 0;
`;

const ListBox = styled.div`
`;

export default function Page() {
  return (
    <Container>
      <Title>Countdown Event</Title>
      <FormBox>
        <Form />
      </FormBox>
      <ListBox>
        <List />
      </ListBox>
    </Container>
  );
}
