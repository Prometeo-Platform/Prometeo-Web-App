import React from 'react';
import Header from '../../components/Header';
import SideMenu from '../../components/SideMenu';
import SettingTable from './settingTable';

function Settings() {
  return (
    <div>
      <Header />
      <SideMenu />
      <SettingTable />
    </div>
  );
}

export default Settings;
