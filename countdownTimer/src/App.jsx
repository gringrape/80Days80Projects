import React, { useState } from 'react';

import Page from './Page';

import './App.css';

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
  const [newEvent, setNewEvent] = useState({
    name: '',
    date: '',
    time: '00:00',
  }); 

  return (
    <Page events={events} />
  );
}
