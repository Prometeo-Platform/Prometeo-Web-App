import React from 'react';
import Header from '../../components/Header';
import SideMenu from '../../components/SideMenu';
import FirefighterTable from './firefighterTable';

function Firefighters() {
  return (
    <div>
      <Header />
      <SideMenu />
      <FirefighterTable />
    </div>
  );
}

export default Firefighters;
