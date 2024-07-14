import { HStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import AdminLogin from './AdminLogin';
import AdminNav from './AdminNav';
import Dashboard from './Dashboard';

function AdminLayout() {
  const [nav, setNav]= useState(0);
  
  const admin= localStorage.getItem("admin");

  if(!admin){
    return(
      <>
        <AdminLogin />
      </>
    )
  }
  else{
    return (
      <>
        <HStack>
          <AdminNav setNav={setNav} nav={nav}/>
          <Dashboard setNav={setNav} nav={nav}/>
        </HStack>
      </>
    )
  }
}

export default AdminLayout
