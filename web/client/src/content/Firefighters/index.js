import React from 'react';
import Header from '../../components/Header';
import SideMenu from '../../components/SideMenu';
import FirefightersTable from './firefightersTable';

function Firefighters() {
  return (
    <div>
      <Header />
      <SideMenu />
      <FirefightersTable />
    </div>
  );
}

export default Firefighters;
