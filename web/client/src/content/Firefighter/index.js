import React from 'react';
import Header from '../../components/Header';
import SideMenu from '../../components/SideMenu';
import FirefighterGauges from './firefighterGauges';
import FirefighterChart from './firefighterChart';

function Firefighter() {
  return (
    <div>
      <Header />
      <SideMenu />
      <FirefighterGauges />
      {/* <FirefighterChart /> */}
    </div>
  );
}

export default Firefighter;
