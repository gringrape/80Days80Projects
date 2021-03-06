import React from 'react';
import styled from 'styled-components';

const breakWidth = '60rem';

const Input = styled.input`
  padding: .5rem;
  margin-left: .5rem;
  vertical-align: middle;
  width: 12rem;
  font-size: 1.2rem;

  @media (max-width: ${breakWidth}) {
    width: 14rem;
  }
`;

const InputBox = styled.div`
  @media (max-width: ${breakWidth}) {
    width: 20rem;
    display: flex;
    justify-content: space-between;
  }
`;

const Container = styled.form`
  display: flex;
  max-width: 58rem;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${breakWidth}) {
    margin-left: 3rem;
    flex-direction: column;
    height: 15rem;
    align-items: normal;
  }
`;

const Button = styled.button`
  padding: .5rem;
  font-size: 1.2rem;
  width: 3.8rem;
  height: 3rem;
  display: inline-block;
`;

export default function Form({ event, getChangeHandler, onSubmit, onQuit }) {
  const { name, date, time } = event;

  return (
    <Container onSubmit={onSubmit}>
      <InputBox>
        <label htmlFor="name">Name</label>
        <Input id="name" value={name} onChange={getChangeHandler('name')} required/>
      </InputBox>
      <InputBox>
        <label htmlFor="date">Date</label>
        <Input type="date" id="date" value={date} onChange={getChangeHandler('date')} required/>
      </InputBox>
      <InputBox>
        <label htmlFor="time">Time</label>
        <Input type="time" id="time" value={time} onChange={getChangeHandler('time')}/>
      </InputBox>
      <Button type="submit">Start</Button>
    </Container>
  );
}
