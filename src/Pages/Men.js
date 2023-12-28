import { Image, SimpleGrid, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React from 'react'

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
                    <SimpleGrid p={""} spacing={0} 
                minChildWidth={{base:"150px",sm:"200px",md:"300px"}} 
                mt={1} ml={"1%"} rowGap={5} columnGap={4}
              >
                
                {/* Items */}
                <Image 
                  src='https://img.tatacliq.com/images/i14/437Wx649H/MP000000020063692_437Wx649H_202311121615421.jpeg'
                  h={{base:"220px", sm: "340px",md:"420px",xl:"470px"}}
                  borderRadius={20}
                />
                <Image 
                  src='https://img.tatacliq.com/images/i14/437Wx649H/MP000000020063692_437Wx649H_202311121615421.jpeg'
                  // h="500px"
                  h={{base:"220px", sm: "340",md:"420px",xl:"470px"}}
                  borderRadius={20}
                />
                <Image 
                  src='https://img.tatacliq.com/images/i14/437Wx649H/MP000000020063692_437Wx649H_202311121615421.jpeg'
                  // h="500px"
                  h={{base:"220px", sm: "340",md:"420px",xl:"470px"}}
                  borderRadius={20}
                />
                <Image 
                  src='https://img.tatacliq.com/images/i14/437Wx649H/MP000000020063692_437Wx649H_202311121615421.jpeg'
                  // h="500px"
                  h={{base:"220px", sm: "340",md:"420px",xl:"470px"}}
                  borderRadius={20}
                />
                <Image 
                  src='https://img.tatacliq.com/images/i14/437Wx649H/MP000000020063692_437Wx649H_202311121615421.jpeg'
                  // h="500px"
                  h={{base:"220px", sm: "340",md:"420px",xl:"470px"}}
                  borderRadius={20}
                />
                <Image 
                  src='https://img.tatacliq.com/images/i14/437Wx649H/MP000000020063692_437Wx649H_202311121615421.jpeg'
                  // h="500px"
                  h={{base:"220px", sm: "340",md:"420px",xl:"470px"}}
                  borderRadius={20}
                />
                <Image 
                  src='https://img.tatacliq.com/images/i14/437Wx649H/MP000000020063692_437Wx649H_202311121615421.jpeg'
                  // h="500px"
                  h={{base:"220px", sm: "340",md:"420px",xl:"470px"}}
                  borderRadius={20}
                />
                <Image 
                  src='https://img.tatacliq.com/images/i14/437Wx649H/MP000000020063692_437Wx649H_202311121615421.jpeg'
                  // h="500px"
                  h={{base:"220px", sm: "340",md:"420px",xl:"470px"}}
                  borderRadius={20}
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
