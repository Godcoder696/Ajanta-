import { Box, Center, Image, SimpleGrid, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import React from 'react'
import Card from './Components/Card'

export default function Men() {
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
                mt={1} ml={"1%"} rowGap={8} columnGap={""}
              >
                
                {/* Items */}
                <Card 
                  desc="SHORT DESCRIPTION"
                  src="https://img.tatacliq.com/images/i14/437Wx649H/MP000000020063692_437Wx649H_202311121615421.jpeg"
                />
                <Card 
                  desc="SHORT DESCRIPTION"
                  src="https://img.tatacliq.com/images/i14/437Wx649H/MP000000020063692_437Wx649H_202311121615421.jpeg"
                />
                <Card 
                  desc="SHORT DESCRIPTION"
                  src="https://img.tatacliq.com/images/i14/437Wx649H/MP000000020063692_437Wx649H_202311121615421.jpeg"
                />
                <Card 
                  desc="SHORT DESCRIPTION"
                  src="https://img.tatacliq.com/images/i14/437Wx649H/MP000000020063692_437Wx649H_202311121615421.jpeg"
                />
                <Card 
                  desc="SHORT DESCRIPTION"
                  src="https://img.tatacliq.com/images/i14/437Wx649H/MP000000020063692_437Wx649H_202311121615421.jpeg"
                />
                <Card 
                  desc="SHORT DESCRIPTION"
                  src="https://img.tatacliq.com/images/i14/437Wx649H/MP000000020063692_437Wx649H_202311121615421.jpeg"
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
