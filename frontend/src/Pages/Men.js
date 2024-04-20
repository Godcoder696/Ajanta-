import { SimpleGrid, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import React from 'react';
import { AppState } from '../Context/AppProvider';
import Card from './Components/Card';

export default function Men() {
  let {data}= AppState();

  console.log(data);
  return (
    <>
        <Tabs isFitted variant='enclosed' p={3} colorScheme='teal'>
          <TabList mb='1em'>
            <Tab>Ajanta Cloth House</Tab>
            <Tab>Ajanta Collection</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <SimpleGrid 
                minChildWidth={{base:"150px",sm:"200px",md:"300px"}} 
                mt={1} ml={"1%"} rowGap={8} columnGap={""}
              >
                
                {/* Items */}
                {
                  data.map((element) => {
                    return(
                      element.category==="men"?
                      <span key= {element._id}>
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
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
    </>
  )
}
