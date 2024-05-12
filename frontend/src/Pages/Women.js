import { SimpleGrid, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import React from 'react';
import { AppState } from '../Context/AppProvider';
import Card from './Components/Card';

export default function Women() {
  let {data}= AppState();

  return (
    <>
        <Tabs isFitted variant='enclosed' p={3} colorScheme='teal'>
          <TabList mb='1em'>
            <Tab>Ajanta Cloth House</Tab>
            <Tab>Ajanta Collections</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <SimpleGrid 
                minChildWidth={{base:"150px",sm:"200px",md:"300px"}} 
                mt={1} ml={"1%"} rowGap={8} 
              >
                
                {/* Items */}
                {
                data.map((element,id) => {
                  return(
                    element.category==="women"?
                    <React.Fragment key= {id}>
                      <Card
                        src={element.image}
                        desc='SHORT DESCRIPTION'
                      />
                    </React.Fragment>
                    :
                    <React.Fragment key= {id}></React.Fragment>
                  )
                })
              }
                
              </SimpleGrid> 
            </TabPanel>
            <TabPanel>
              <SimpleGrid 
                minChildWidth={{base:"150px",sm:"200px",md:"300px"}} 
                mt={1} ml={"1%"} rowGap={8} 
              >
                
                {/* Items */}
                {
                data.map((element,id) => {
                  return(
                    element.category==="women"?
                    <React.Fragment key= {id} >
                      <Card
                        src={element.image}
                        desc='SHORT DESCRIPTION'
                      />
                    </React.Fragment>
                    :
                    <React.Fragment key= {id}></React.Fragment>
                  )
                })
              }
                
              </SimpleGrid> 
            </TabPanel>
          </TabPanels>
        </Tabs>
    </>
  )
}
