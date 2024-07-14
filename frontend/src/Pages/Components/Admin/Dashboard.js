import { Box } from '@chakra-ui/react'
import React from 'react'
import MenDashboard from './MenDashboard'
import WomenDashboard from './WomenDashboard'

function Dashboard({nav}) {
  return (
    <Box h="100vh" w="100%" pb={5} overflowY="scroll" overflowX="hidden" flex flexDir="column" alignItems="start" justifyContent="space-between" bgColor="">
        {
            nav==0?
            <MenDashboard/>
            :
            (
                nav==1?
                <WomenDashboard/>
                :
                <>Analytics</>
            )
 
        }
    </Box>
  )
}

export default Dashboard
