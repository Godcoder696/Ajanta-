import { Image, SimpleGrid, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React from 'react'
import Card from './Components/Card'

export default function Women() {
  return (
    <>
        <Tabs isFitted variant='enclosed' p={3} colorScheme='teal'>
          <TabList mb='1em'>
            <Tab>Stitched</Tab>
            <Tab>Unstitched</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <SimpleGrid 
                minChildWidth={{base:"150px",sm:"200px",md:"300px"}} 
                mt={1} ml={"1%"} rowGap={8} 
              >
                
                {/* Items */}
                <Card 
                  src='https://www.koskii.com/cdn/shop/files/koskii-wine-kashmirithreadwork-georgette-designer-salwar-suit-ssrm0030431_wine_3_1800x1800.jpg?v=1690976407'
                  desc='SHORT DESCRIPTION'
                />
                <Card 
                  src='https://www.koskii.com/cdn/shop/files/koskii-wine-kashmirithreadwork-georgette-designer-salwar-suit-ssrm0030431_wine_3_1800x1800.jpg?v=1690976407'
                  desc='SHORT DESCRIPTION'
                />
                <Card 
                  src='https://www.koskii.com/cdn/shop/files/koskii-wine-kashmirithreadwork-georgette-designer-salwar-suit-ssrm0030431_wine_3_1800x1800.jpg?v=1690976407'
                  desc='SHORT DESCRIPTION'
                />
                <Card 
                  src='https://www.koskii.com/cdn/shop/files/koskii-wine-kashmirithreadwork-georgette-designer-salwar-suit-ssrm0030431_wine_3_1800x1800.jpg?v=1690976407'
                  desc='SHORT DESCRIPTION'
                />
                
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
