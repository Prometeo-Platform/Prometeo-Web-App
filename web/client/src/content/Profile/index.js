import React from 'react';
import Header from '../../components/Header';
import SideMenu from '../../components/SideMenu';
import ProfileTable from './profileTable';

function Profile() {
  return (
    <div>
      <Header />
      <SideMenu />
      <ProfileTable />
    </div>
  );
}

export default Profile;
