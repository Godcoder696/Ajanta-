import { SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import Card from './Card'

function Men() {
  return (
    <SimpleGrid minChildWidth={{base:"150px",sm:"200px",md:"300px"}} 
    mt={1} ml={"1%"} rowGap={8} columnGap={""}>
      <Card></Card>
      
      <Card></Card>
      
      <Card></Card>
      
      <Card></Card>
      
      <Card></Card>
    </SimpleGrid>
  )
}

export default Men
