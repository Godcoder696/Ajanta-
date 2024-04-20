import {
  Heading,
  SimpleGrid
} from '@chakra-ui/react';
import { AppState } from '../../../Context/AppProvider';
import Card from '../Card';

export default function BestSeller() {
  const {data}= AppState()

  console.log(data);

  return (
    <>
      {/* Heading */}
      <Heading ml={"2%"} mt="7">OUR BESTSELLER</Heading>

      {/* Grid for Bestseller items */}
      <SimpleGrid p={"10px"} spacing={0} 
        minChildWidth={{base:"150px",sm:"200px",md:"300px"}} 
        mt={10} ml={"1%"} rowGap={10} 
      >
        
        {/* Items */}
        {
          data.map((element,id) => {
            return(
              element.featured?
              <span key= {id}>
                <Card
                  src={element.image}
                  desc='SHORT DESCRIPTION'
                />
              </span>
              :
              <></>
            )
          })
        }
      </SimpleGrid> 
    </>
  )
}
