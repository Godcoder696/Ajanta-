import { Box, HStack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import MenDashboard from './MenDashboard'
import WomenDashboard from './WomenDashboard'
import { AddIcon } from '@chakra-ui/icons';
import DashboardHeading from './DashboardHeading';
import CreateCard from './CreateCard';

function Dashboard({nav, setNav}) {
  const [openDrawer, setOpenDrawer]= useState(false);
  return (
    <Box h="100vh" w="100%" pb={5} overflowY="scroll" overflowX="hidden" flex flexDir="column" alignItems="start" justifyContent="space-between" bgColor="">
      <DashboardHeading setOpenDrawer={setOpenDrawer} nav={nav} setNav={setNav}/>
        {
            nav===0?
            <MenDashboard />
            :
            (
              nav===1?
              <WomenDashboard />
              :
              <>Analytics</>
            )
        }
      <CreateCard openDrawer={openDrawer} setOpenDrawer={setOpenDrawer}/>
    </Box>
  )
}

export default Dashboard
