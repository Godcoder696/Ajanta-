import { HStack, useStatStyles } from '@chakra-ui/react'
import React, { useState } from 'react'
import AdminNav from './AdminNav'
import Dashboard from './Dashboard'

function AdminLayout() {
    const [nav, setNav]= useState(0);
  return (
    <>
        <HStack>
            <AdminNav setNav={setNav} nav={nav}/>
            <Dashboard nav={nav}/>
        </HStack>
    </>
  )
}

export default AdminLayout
