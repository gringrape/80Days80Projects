import React, { useState } from 'react';

import Page from './Page';

import './App.css';

import { getHours, getSeconds } from './utils';

export default function App() {
  const [events, setEvents] = useState([
    {
      id: 1,
      name: '일본여행',
      datetime: '2020-12-17T03:24:00',
    },
    {
      id: 2,
      name: '호주여행',
      datetime: '2020-12-19T05:24:00',
    },
  ]);

  const [event, setEvent] = useState({
    name: '',
    date: '',
    time: '00:00',
  });

  const getChangeHandler = (field) => (e) => {
    const { value } = e.target;

    setEvent((prevEvent) => ({
      ...prevEvent,
      [field]: value,
    }));
  };

  console.log(events);

  const handleSubmitAdd = (e) => {
    alert('submit!');
    e.preventDefault();

    if (getHours(new Date(), new Date(event.date + 'T' + event.time)) < 5) {
      alert('too close to now!')
      return;
    }

    setEvents([
      ...events,
      {
        id: new Date(),
        name: event.name,
        datetime: event.date + 'T' + event.time,
      },
    ]);
  };

  return (
    <Page
      event={event}
      events={events}
      getChangeHandler={getChangeHandler}
      handleSubmitAdd={handleSubmitAdd}
    />
  );
}
