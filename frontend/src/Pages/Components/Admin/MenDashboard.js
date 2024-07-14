import { Box, HStack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import Men from './Men'
import {AddIcon} from '@chakra-ui/icons'
import CreateCard from './CreateCard'

function MenDashboard({openDrawer, setOpenDrawer}) {
  
  return (
    <>
        <Men/>
    </>
  )
}

export default MenDashboard
