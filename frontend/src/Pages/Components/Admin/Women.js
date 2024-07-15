import { SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import Card from './Card'
import { AppState } from '../../../Context/AppProvider';

const Women = () => {
  let {data,setData}= AppState([]);
  return (
    <SimpleGrid minChildWidth={{base:"150px",sm:"200px",md:"300px"}} w="100%" 
    mt={3} ml={"1%"} rowGap={8} columnGap={4}>
      {
        data.map((item,key)=>{
          return (
            item.category==="women"?
            <Card key={key} item={item}></Card>
            :
            <React.Fragment key={key}></React.Fragment>
          )
        })
      }
    </SimpleGrid>
  )
}

export default Women
