import { SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import Card from './Card'
import { AppState } from '../../../Context/AppProvider';

function Men() {
  let {data,setData}= AppState([]);
  console.log(data);
  return (
    <SimpleGrid minChildWidth={{base:"150px",sm:"200px",md:"300px"}} w="100%" 
    mt={3} ml={"1%"} rowGap={8} columnGap={4}>
      {
        data.map((item,key)=>{
          return (
            item.category==="men"?
            <Card key={key} item={item} index={key}></Card>
            :
            <React.Fragment key={key}></React.Fragment>
          )
        })
      }
    </SimpleGrid>
  )
}

export default Men
