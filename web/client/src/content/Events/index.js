import React from 'react';
import Header from '../../components/Header';
import SideMenu from '../../components/SideMenu';
import EventTable from './eventTable';

function Events() {
  return (
    <div>
      <Header />
      <SideMenu />
      <EventTable />
    </div>
  );
}

export default Events;
