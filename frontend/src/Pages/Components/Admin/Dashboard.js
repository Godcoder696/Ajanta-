import { Box } from '@chakra-ui/react'
import React, { useState } from 'react'
import MenDashboard from './MenDashboard'
import WomenDashboard from './WomenDashboard'

function Dashboard({nav}) {
  const [openDrawer, setOpenDrawer]= useState(false);
  return (
    <Box h="100vh" w="100%" pb={5} overflowY="scroll" overflowX="hidden" flex flexDir="column" alignItems="start" justifyContent="space-between" bgColor="">
        {
            nav===0?
            <MenDashboard openDrawer={openDrawer} setOpenDrawer={setOpenDrawer}/>
            :
            (
                nav===1?
                <WomenDashboard openDrawer={openDrawer} setOpenDrawer={setOpenDrawer}/>
                :
                <>Analytics</>
            )
 
        }
    </Box>
  )
}

export default Dashboard
